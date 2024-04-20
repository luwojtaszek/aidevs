import { api, BaseResponse } from '../../core/api.ts';
import { AnswerType, GoogleTaskResponse } from './types.ts';
import { withErrorHandling } from '../../core/errors.ts';

const TASK_NAME = 'google';
const main = async (): Promise<BaseResponse> => {
  const token = (await api.auth({ taskName: TASK_NAME })).token;

  const task = await api.getTask<GoogleTaskResponse>({
    token: token,
  });

  console.log(task);

  return await api.answerTask<AnswerType>({
    token: token,
    answer: 'https://hook.eu2.make.com/uoaqoew56fp8zoz3zgbpffgka3bbkc58',
  });
};

const response = await withErrorHandling(main, { logError: true });
console.log(response);
