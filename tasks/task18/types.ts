import { BaseResponse } from '../../core/api.ts';

export type AnswerType = string;

export type OwnApiProTaskResponse = BaseResponse & {
  msg: string;
  url: string;
};
