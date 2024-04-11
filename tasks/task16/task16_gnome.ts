import { api, BaseResponse } from '../../core/api.ts';
import { GnomeTaskResponse } from './types.ts';
import { withErrorHandling } from '../../core/errors.ts';
import { ChatOpenAI } from '@langchain/openai';
import { HumanMessage } from 'langchain/schema';
import { AnswerType } from '../task13/types.ts';

const TASK_NAME = 'gnome';
const main = async (): Promise<BaseResponse> => {
  const token = (await api.auth({ taskName: TASK_NAME })).token;

  const task = await api.getTask<GnomeTaskResponse>({
    token: token,
  });

  console.log(task);

  const chat = new ChatOpenAI({ modelName: 'gpt-4-vision-preview' });

  const humanMessage = new HumanMessage({
    content: [
      { type: 'text', text: task.msg },
      { type: 'image_url', image_url: task.url },
    ],
  });

  const { content } = await chat.invoke([humanMessage]);

  console.log(content);

  if (typeof content === 'string') {
    return await api.answerTask<AnswerType>({
      token: token,
      answer: content,
    });
  } else {
    throw new Error('Wrong OpenAI response');
  }
};

const response = await withErrorHandling(main);
console.log(response);
