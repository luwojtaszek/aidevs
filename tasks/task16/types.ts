import { BaseResponse } from '../../core/api.ts';

export type AnswerType = string;

export type GnomeTaskResponse = BaseResponse & {
  msg: string;
  url: string;
};
