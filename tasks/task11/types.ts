import { BaseResponse } from '../../core/api.ts';

export type AnswerType = string;

export type WhoamiTaskResponse = BaseResponse & {
  hint: string;
};

export type GuessCharacterChatResponse = {
  name: string | undefined;
  recognized: boolean;
};
