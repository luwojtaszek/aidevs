import { api, BaseResponse } from '../../core/api.ts';
import { AnswerType, PersonItem, PeopleTaskResponse, PersonShortData } from './types.ts';
import { withErrorHandling } from '../../core/errors.ts';
import { QdrantClient } from '@qdrant/js-client-rest';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { TextLoader } from 'langchain/document_loaders/fs/text';
import { Document } from 'langchain/document';
import { v4 as uuidv4 } from 'uuid';
import { ensureCollection } from '../../core/quadrant.ts';
import { ChatPromptTemplate } from 'langchain/prompts';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { GuessCharacterChatResponse } from '../task11/types.ts';

const MEMORY_PATH = 'tasks/task13/people.json';
const COLLECTION_NAME = 'people';

const qdrant = new QdrantClient({ url: process.env.QDRANT_URL });
const embeddings = new OpenAIEmbeddings({ maxConcurrency: 10 });

await ensureCollection(qdrant, COLLECTION_NAME);
const collection = await qdrant.getCollection(COLLECTION_NAME);

const systemTemplate = `
Answer question ultra-concisely using CONTEXT below and nothing more and truthfully say "I don't know" when the CONTEXT is not enough to give an answer.

Facts:
- In context you can find information in polish language about people. Each line represents information about single person.

Rules:
- Return answer in POLISH language

context###{context}###
`;

const humanTemplate = '{question}';

const chatPrompt = ChatPromptTemplate.fromMessages([
  ['system', systemTemplate],
  ['human', humanTemplate],
]);

const indexData = async () => {
  if (!collection.points_count) {
    // Read File
    const loader = new TextLoader(MEMORY_PATH);
    let [memory] = await loader.load();
    let documents = (JSON.parse(memory.pageContent) as PersonItem[]).map(
      (item) =>
        new Document({
          pageContent: `Imie: ${item.imie}, Nazwisko: ${item.nazwisko}, Ulubiony kolor: ${item.ulubiony_kolor}, O mnie: ${item.o_mnie}`,
          metadata: {
            source: COLLECTION_NAME,
            imie: item.imie,
            nazwisko: item.nazwisko,
            o_mnie: item.o_mnie,
            ulubiony_kolor: item.ulubiony_kolor,
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
};

const searchPeople = async (question: string): Promise<PersonShortData[]> => {
  const queryEmbedding = await embeddings.embedQuery(question);

  const search = await qdrant.search(COLLECTION_NAME, {
    vector: queryEmbedding,
    limit: 5,
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

  return search.map((item) => item.payload as PersonShortData);
};

const main = async (): Promise<BaseResponse> => {
  await indexData();
  const token = (await api.auth({ taskName: 'people' })).token;

  const task = await api.getTask<PeopleTaskResponse>({
    token: token,
  });

  const matchingPeople = await searchPeople(task.question);

  if (matchingPeople.length <= 0) throw new Error('No matching people found');

  const context = matchingPeople
    .map((person) => `Imie: ${person.imie}, Nazwisko: ${person.nazwisko}, Ulubiony kolor: ${person.ulubiony_kolor}, Opis: ${person.o_mnie}`)
    .join('\n');

  console.log(`Context:\n${context}`);

  const formattedChatPrompt = await chatPrompt.formatMessages({
    context: context,
    question: task.question,
  });

  const chat = new ChatOpenAI({ modelName: 'gpt-4' });

  const { content } = await chat.invoke(formattedChatPrompt);

  if (typeof content === 'string') {
    console.log(`Chat response: ${content}`);

    return await api.answerTask<AnswerType>({
      token: token,
      answer: content,
    });
  } else {
    throw new Error('Invalid response from OpenAI');
  }
};

const response = await withErrorHandling(main);
console.log(response);
