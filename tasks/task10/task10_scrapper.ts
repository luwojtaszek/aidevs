import { api, BaseResponse } from '../../core/api.ts';
import { AnswerType, ScrapperTaskResponse } from './types.ts';
import { ChatPromptTemplate } from 'langchain/prompts';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { axiosInstance } from '../../core/axios.ts';

const systemTemplate = `
As a person who answers the questions ultra-concisely using CONTEXT below 
and nothing more and truthfully says "don't know" when the CONTEXT is not enough to give an answer.

Rules:
- Return answer for the question in POLISH language
- Maximum length for the answer is 200 characters

context###{context}###
`;

const humanTemplate = '{text}';

const chatPrompt = ChatPromptTemplate.fromMessages([
  ['system', systemTemplate],
  ['human', humanTemplate],
]);

const getArticleContent = async (url: string): Promise<string> => {
  const maxRetries = 3;
  let counter = 0;

  do {
    try {
      return await axiosInstance
        .get<string>(url, {
          timeout: 30 * 1000,
          headers: {
            Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
          },
        })
        .then((r) => r.data);
    } catch (e) {
      console.log(`Error while fetching ${url}`);
      console.log(e);

      counter++;
    }
  } while (counter < maxRetries);

  throw new Error(`Failed to fetch ${url} after ${maxRetries} retries`);
};

const main = async (): Promise<BaseResponse> => {
  const token = (await api.auth({ taskName: 'scraper' })).token;

  const task = await api.getTask<ScrapperTaskResponse>({
    token: token,
  });

  const context = await getArticleContent(task.input);

  const formattedChatPrompt = await chatPrompt.formatMessages({
    context,
    text: task.question,
  });

  const chat = new ChatOpenAI({ modelName: 'gpt-4' });
  const { content } = await chat.invoke(formattedChatPrompt);

  if (typeof content === 'string') {
    return await api.answerTask<AnswerType>({
      token: token,
      answer: content,
    });
  }

  throw new Error('Invalid response from OpenAI');
};

try {
  const answered = await main();
  console.log(answered);
} catch (e) {
  console.log(e);
}
