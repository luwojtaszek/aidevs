import { BaseResponse } from '../../core/api.ts';

export type AnswerType = string;

export type Md2htmlTaskResponse = BaseResponse & {
  input: string;
  hint: string;
};
