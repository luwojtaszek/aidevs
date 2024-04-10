import { BaseResponse } from '../../core/api.ts';

export type AnswerType = string;

export type KnowledgeTaskResponse = BaseResponse & {
  question: string;
};

export type NBPCurrencyRateResponse = {
  table: string;
  no: string;
  effectiveDate: string;
  rates: NBPCurrencyRate[];
};

export type NBPCurrencyRate = {
  currency: string;
  code: string;
  mid: number;
};
