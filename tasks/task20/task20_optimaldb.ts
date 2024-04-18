import { api, BaseResponse } from '../../core/api.ts';
import { AnswerType, OptimalDbTaskResponse } from './types.ts';
import { withErrorHandling } from '../../core/errors.ts';
import { TextLoader } from 'langchain/document_loaders/fs/text';
import { ChatPromptTemplate } from 'langchain/prompts';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import fs from 'fs/promises';

const TASK_NAME = 'optimaldb';

const systemTemplate = `
Your task is to compress data provided by the user without losing any information.

Facts:
- Provided data are facts about single person
- Each individual line is a fact

Rules:
- Categorize information
- Avoid duplicates
- Return compressed data and nothing more
`;

const humanTemplate = '{personData}';

const chatPrompt = ChatPromptTemplate.fromMessages([
  ['system', systemTemplate],
  ['human', humanTemplate],
]);

const optimize = async (): Promise<void> => {
  const loader = new TextLoader('tasks/task20/3friends.json');
  const [fileContent] = await loader.load();
  const data = JSON.parse(fileContent.pageContent) as Record<string, string[]>;

  const compressedData: Record<string, string> = {};

  for (const userName in data) {
    console.log(`Optimizing data for: ${userName}`);
    const personData = data[userName].join('\n');

    const formattedChatPrompt = await chatPrompt.formatMessages({
      personData: personData,
    });

    const chat = new ChatOpenAI({ modelName: 'gpt-3.5-turbo' });
    const { content } = await chat.invoke(formattedChatPrompt);

    if (typeof content === 'string') {
      compressedData[userName] = content;
    } else {
      throw new Error('Wrong OpenAI response');
    }
  }
  await fs.writeFile('3friends_optimized.json', JSON.stringify(compressedData, null, 2));
};

const main = async (): Promise<BaseResponse> => {
  const token = (await api.auth({ taskName: TASK_NAME })).token;

  const task = await api.getTask<OptimalDbTaskResponse>({
    token: token,
  });

  const loader = new TextLoader('tasks/task20/3friends_optimized.json');
  const [fileContent] = await loader.load();

  return await api.answerTask<AnswerType>({
    token: token,
    answer: JSON.stringify(fileContent),
  });
};

const response = await withErrorHandling(main, { logError: true });
console.log(response);

// await optimize();
