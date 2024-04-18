import { api, BaseResponse } from '../../core/api.ts';
import { AnswerType, OwnApiProTaskResponse } from './types.ts';
import { withErrorHandling } from '../../core/errors.ts';

const TASK_NAME = 'ownapipro';
const main = async (): Promise<BaseResponse> => {
  const token = (await api.auth({ taskName: TASK_NAME })).token;

  const task = await api.getTask<OwnApiProTaskResponse>({
    token: token,
  });

  console.log(task);

  return await api.answerTask<AnswerType>({
    token: token,
    answer: 'https://hook.eu2.make.com/b7bdrl49ofu8aaueivswajgiom3jd5ty',
  });
};

const response = await withErrorHandling(main, { logError: true });
console.log(response);
