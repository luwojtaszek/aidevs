import { api, BaseResponse } from '../../core/api.ts';
import OpenAI from 'openai';

export type AnswerType = Array<0 | 1>;

export type ModerationTaskResponse = BaseResponse & {
  input: Array<string>;
};

const token = (await api.auth({ taskName: 'moderation' })).token;

const task = await api.getTask<ModerationTaskResponse>({
  token: token,
});

const client = new OpenAI();

const moderations = await client.moderations.create({
  input: task.input,
});

const answer: AnswerType = moderations.results.map((result) => {
  return result.flagged ? 1 : 0;
});

const answered = await api.answerTask<AnswerType>({
  token: token,
  answer: answer,
});

console.log(answered);
