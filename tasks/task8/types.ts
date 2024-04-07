import { BaseResponse } from '../../core/api.ts';

export type AnswerType = any;

export type FunctionsTaskResponse = BaseResponse & {
  hint1: string;
};
