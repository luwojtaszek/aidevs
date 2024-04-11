import { api, BaseResponse } from '../../core/api.ts';
import { ToolsTaskResponse } from './types.ts';
import { withErrorHandling } from '../../core/errors.ts';
import { ChatOpenAI } from '@langchain/openai';
import { addToCalendar, addToToDo } from './schema.ts';
import { ChatPromptTemplate } from 'langchain/prompts';
import { parseFunctionCall } from '../../core/openai-utils.ts';
import { AnswerType } from '../task13/types.ts';

const TASK_NAME = 'tools';

const systemTemplate = `
Your task is to categorize user prompt to one of the functions:
- addToToDo
- addToCalendar

Facts:
- today is 2024-04-11

Rules:
- If user prompt is related to particular date categorize it as addToCalendar otherwise categorize it as addToToDo
`;

const humanTemplate = '{question}';

const chatPrompt = ChatPromptTemplate.fromMessages([
  ['system', systemTemplate],
  ['human', humanTemplate],
]);

const main = async (): Promise<BaseResponse> => {
  const token = (await api.auth({ taskName: TASK_NAME })).token;

  const task = await api.getTask<ToolsTaskResponse>({
    token: token,
  });

  console.log(task);

  const chat = new ChatOpenAI({
    modelName: 'gpt-4',
  }).bind({ functions: [addToToDo, addToCalendar] });

  const formattedChatPrompt = await chatPrompt.formatMessages({
    question: task.question,
  });

  const result = await chat.invoke(formattedChatPrompt);
  const action = parseFunctionCall(result);

  console.log(result?.additional_kwargs?.function_call);

  if (action) {
    return await api.answerTask<AnswerType>({
      token: token,
      answer: action.args,
    });
  } else {
    throw new Error('Wrong OpenAI response');
  }
};

const response = await withErrorHandling(main);

console.log(response);
