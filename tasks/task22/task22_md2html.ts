import { api, BaseResponse } from '../../core/api.ts';
import { AnswerType, Md2htmlTaskResponse } from './types.ts';
import { withErrorHandling } from '../../core/errors.ts';
import { ChatPromptTemplate } from 'langchain/prompts';
import { ChatOpenAI } from 'langchain/chat_models/openai';

const TASK_NAME = 'md2html';

const systemTemplate = `
Transform user Markdown input to HTML.

INPUT:
`;

const humanTemplate = '{input}';

const chatPrompt = ChatPromptTemplate.fromMessages([
  ['system', systemTemplate],
  ['human', humanTemplate],
]);

const main = async (): Promise<BaseResponse> => {
  const token = (await api.auth({ taskName: TASK_NAME })).token;

  const task = await api.getTask<Md2htmlTaskResponse>({
    token: token,
  });

  console.log(task);

  const formattedChatPrompt = await chatPrompt.formatMessages({
    input: task.input,
  });

  const chat = new ChatOpenAI({ modelName: 'ft:gpt-3.5-turbo-0125:personal:md2html3:9GncgKkk', maxTokens: 2048 });

  const { content } = await chat.invoke(formattedChatPrompt);

  if (typeof content === 'string') {
    console.log(`Chat response: ${content}`);

    return await api.answerTask<AnswerType>({
      token: token,
      answer: content,
    });
  } else {
    throw new Error('Invalid response from OpenAI');
  }
};

const response = await withErrorHandling(main, { logError: true });
console.log(response);
