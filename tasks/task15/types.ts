import { BaseResponse } from '../../core/api.ts';

export type AnswerType = string;

export type ToolsTaskResponse = BaseResponse & {
  question: string;
  hint: string;
};
