import { BaseResponse } from '../../core/api.ts';

export type AnswerType = string;

export type OwnApiTaskResponse = BaseResponse & {
  msg: string;
  url: string;
};
