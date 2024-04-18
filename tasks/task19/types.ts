import { BaseResponse } from '../../core/api.ts';

export type AnswerType = string;

export type MemeTaskResponse = BaseResponse & {
  service: string;
  image: string;
  text: string;
  hint: string;
};

export type RenderFormResponse = {
  requestId: string;
  href: string;
};
