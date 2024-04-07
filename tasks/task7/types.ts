import { BaseResponse } from '../../core/api.ts';

export type AnswerType = string;

export type WhisperTaskResponse = BaseResponse & {
  hint: string;
};
