import { api, BaseResponse } from '../../core/api.ts';
import { AnswerType, EmbeddingTaskResponse } from './types.ts';
import OpenAI from 'openai';

const main = async (): Promise<BaseResponse> => {
  const token = (await api.auth({ taskName: 'embedding' })).token;

  const task = await api.getTask<EmbeddingTaskResponse>({
    token: token,
  });

  const client = new OpenAI();

  const embeddings = await client.embeddings.create({
    model: 'text-embedding-ada-002',
    input: 'Hawaiian pizza',
    encoding_format: 'float',
  });

  return await api.answerTask<AnswerType>({
    token: token,
    answer: embeddings.data[0].embedding,
  });
};

const answered = await main();

console.log(answered);
