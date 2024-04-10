import { BaseResponse } from '../../core/api.ts';

export type AnswerType = string | number;

export type PeopleTaskResponse = BaseResponse & {
  question: string;
  data: string;
  hint1: string;
  hint2: string;
};

export type PersonShortData = {
  imie: string;
  nazwisko: string;
  o_mnie: string;
  ulubiony_kolor: string;
};

export type PersonItem = PersonShortData & {
  wiek: string;
  ulubiona_postac_z_kapitana_bomby: string;
  ulubiony_serial: string;
  ulubiony_film: string;
};
