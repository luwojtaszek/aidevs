import { BaseResponse } from '../../core/api.ts';

export type AnswerType = string;

export type InPromptTaskResponse = BaseResponse & {
  input: Array<string>;
  question: string;
};
