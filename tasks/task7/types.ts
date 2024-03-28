import { BaseResponse } from '../../core/api.ts';

export type AnswerType = string;

export type EmbeddingTaskResponse = BaseResponse & {
  hint: string;
};
