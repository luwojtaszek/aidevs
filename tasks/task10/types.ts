import { BaseResponse } from '../../core/api.ts';

export type AnswerType = string;

export type ScrapperTaskResponse = BaseResponse & {
  input: string;
  question: string;
};
