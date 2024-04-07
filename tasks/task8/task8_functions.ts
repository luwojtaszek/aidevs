import { api, BaseResponse } from '../../core/api.ts';
import { AnswerType, FunctionsTaskResponse } from './types.ts';

const main = async (): Promise<BaseResponse> => {
  const token = (await api.auth({ taskName: 'functions' })).token;

  const task = await api.getTask<FunctionsTaskResponse>({
    token: token,
  });

  console.log(task);

  return await api.answerTask<AnswerType>({
    token: token,
    answer: {
      name: 'addUser',
      description: 'Add user to the database',
      parameters: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'User name',
          },
          surname: {
            type: 'string',
            description: 'User surname',
          },
          year: {
            type: 'integer',
            description: 'User year of birth',
          },
        },
      },
    },
  });
};

const answered = await main();
console.log(answered);
