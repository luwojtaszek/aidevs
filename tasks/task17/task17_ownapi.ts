import { api, BaseResponse } from '../../core/api.ts';
import { GnomeTaskResponse } from './types.ts';
import { withErrorHandling } from '../../core/errors.ts';
import { AnswerType } from '../task13/types.ts';

const TASK_NAME = 'ownapi';
const main = async (): Promise<BaseResponse> => {
  const token = (await api.auth({ taskName: TASK_NAME })).token;

  const task = await api.getTask<GnomeTaskResponse>({
    token: token,
  });

  console.log(task);

  return await api.answerTask<AnswerType>({
    token: token,
    answer: 'https://hook.eu2.make.com/8h2s8i6yn8vkeb71f1bilhcp8vakjpnm',
  });
};

const response = await withErrorHandling(main);
console.log(response);
