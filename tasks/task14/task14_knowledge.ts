import { api, BaseResponse } from '../../core/api.ts';
import { KnowledgeTaskResponse } from './types.ts';
import { withErrorHandling } from '../../core/errors.ts';
import { categorizeQuestion } from './categorize.ts';
import { AnswerType } from '../task13/types.ts';
import { answerGeneralKnowledgeQuestion } from './generalKnowledgeHandler.ts';
import { answerCurrencyRateQuestion } from './currencyHandler.ts';

const main = async (): Promise<BaseResponse> => {
  const token = (await api.auth({ taskName: 'knowledge' })).token;

  const task = await api.getTask<KnowledgeTaskResponse>({
    token: token,
  });

  const questionCategory = await categorizeQuestion(task.question);

  switch (questionCategory) {
    case 'Currency':
      const currencyRateAnswer = await answerCurrencyRateQuestion(task.question);
      return await api.answerTask<AnswerType>({
        token: token,
        answer: currencyRateAnswer,
      });
    case 'Population':
      throw new Error('Not implemented');
    case 'GeneralKnowledge':
      const generalKnowledgeAnswer = await answerGeneralKnowledgeQuestion(task.question);
      return await api.answerTask<AnswerType>({
        token: token,
        answer: generalKnowledgeAnswer,
      });
  }
};

const response = await withErrorHandling(main);
console.log(response);
