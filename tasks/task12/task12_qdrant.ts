import { api, BaseResponse } from '../../core/api.ts';
import { AnswerType, ArchiveItem, SearchTaskResponse } from './types.ts';
import { withErrorHandling } from '../../core/errors.ts';
import { QdrantClient } from '@qdrant/js-client-rest';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { ensureCollection } from './quadrant.ts';
import { TextLoader } from 'langchain/document_loaders/fs/text';
import { Document } from 'langchain/document';
import { v4 as uuidv4 } from 'uuid';

const MEMORY_PATH = 'tasks/task12/archiwum_aidevs.json';
const COLLECTION_NAME = 'ai_devs';

const qdrant = new QdrantClient({ url: process.env.QDRANT_URL });
const embeddings = new OpenAIEmbeddings({ maxConcurrency: 5 });

await ensureCollection(qdrant, COLLECTION_NAME);
const collection = await qdrant.getCollection(COLLECTION_NAME);

if (!collection.points_count) {
  // Read File
  const loader = new TextLoader(MEMORY_PATH);
  let [memory] = await loader.load();
  let documents = (JSON.parse(memory.pageContent) as ArchiveItem[]).map(
    (item) =>
      new Document({
        pageContent: `TITLE: ${item.title} ${item.info}`,
        metadata: {
          source: COLLECTION_NAME,
          title: item.title,
          info: item.info,
          url: item.url,
          uuid: uuidv4(),
        },
      })
  );

  // Generate embeddings
  const points = [];
  for (const document of documents) {
    const [embedding] = await embeddings.embedDocuments([document.pageContent]);
    points.push({
      id: document.metadata.uuid,
      payload: document.metadata,
      vector: embedding,
    });
  }

  // Index
  await qdrant.upsert(COLLECTION_NAME, {
    wait: true,
    batch: {
      ids: points.map((point) => point.id),
      vectors: points.map((point) => point.vector),
      payloads: points.map((point) => point.payload),
    },
  });
}

const main = async (): Promise<BaseResponse> => {
  const token = (await api.auth({ taskName: 'search' })).token;

  const task = await api.getTask<SearchTaskResponse>({
    token: token,
  });

  const queryEmbedding = await embeddings.embedQuery(task.question);

  const search = await qdrant.search(COLLECTION_NAME, {
    vector: queryEmbedding,
    limit: 1,
    filter: {
      must: [
        {
          key: 'source',
          match: {
            value: COLLECTION_NAME,
          },
        },
      ],
    },
  });

  const url = search[0].payload?.url as string | undefined;

  if (url) {
    return await api.answerTask<AnswerType>({
      token: token,
      answer: url,
    });
  } else {
    throw new Error('Missing url in search result');
  }
};

const response = await withErrorHandling(main);
console.log(response);
