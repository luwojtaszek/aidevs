import { axiosInstance } from '../../core/axios.ts';
import { NBPCurrencyRateResponse } from './types.ts';
import { ChatPromptTemplate } from 'langchain/prompts';
import { ChatOpenAI } from 'langchain/chat_models/openai';

const systemTemplate = `
Your task is to match user question with currency from CONTEXT.

Facts:
- Question is asked in POLISH language
- In context you can find information about currency and it's code.

Rules:
- Return only currency code and nothing else

examples###
Jaki jest kurs tajskiego bata?
THB

Jaki jest kurs dolara amerykańskiego?
USD
###

context###{context}###
`;

const humanTemplate = '{question}';

const chatPrompt = ChatPromptTemplate.fromMessages([
  ['system', systemTemplate],
  ['human', humanTemplate],
]);

export const answerCurrencyRateQuestion = async (question: string): Promise<number> => {
  const rates = await axiosInstance.get<NBPCurrencyRateResponse>('http://api.nbp.pl/api/exchangerates/tables/A').then((r) => r.data.rates);
  const context = rates.map((rate) => `Currency name: ${rate.currency}, Currency code: ${rate.code}`).join('\n');

  const formattedChatPrompt = await chatPrompt.formatMessages({
    context: context,
    question: question,
  });

  const chat = new ChatOpenAI({ modelName: 'gpt-4' });
  const { content } = await chat.invoke(formattedChatPrompt);

  const rate = rates.find((rate) => rate.code === content)?.mid;

  if (rate) {
    return rate;
  } else {
    throw new Error('Wrong OpenAI response');
  }
};
