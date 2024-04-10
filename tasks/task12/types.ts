import { BaseResponse } from '../../core/api.ts';

export type AnswerType = string;

export type SearchTaskResponse = BaseResponse & {
  question: string;
};

export type ArchiveItem = {
  title: string;
  url: string;
  info: string;
  date: string;
};
