import { BaseResponse } from '../../core/api.ts';

export type AnswerType = Array<number>;

export type EmbeddingTaskResponse = BaseResponse & {
  hint1: string;
  hint2: string;
  hint3: string;
};
