import { ChatPromptTemplate } from 'langchain/prompts';
import { ChatOpenAI } from 'langchain/chat_models/openai';

export type QuestionCategory = 'Currency' | 'Population' | 'GeneralKnowledge';

const CATEGORIES: QuestionCategory[] = ['Currency', 'Population', 'GeneralKnowledge'];

const systemTemplate = `
Your task is to match user question to one of categories:
- Currency
- Population
- GeneralKnowledge

Rules:
- Return only matching category and nothing else
- If question does not match any category return "GeneralKnowledge"

examples###
What is the currency of Poland?
Currency

How many people do live in Warsaw?
Population

Who wrote "The Lord of the Rings"?
GeneralKnowledge
###
`;

const humanTemplate = '{question}';

const chatPrompt = ChatPromptTemplate.fromMessages([
  ['system', systemTemplate],
  ['human', humanTemplate],
]);

export const categorizeQuestion = async (question: string): Promise<QuestionCategory> => {
  const formattedChatPrompt = await chatPrompt.formatMessages({
    question: question,
  });

  const chat = new ChatOpenAI({ modelName: 'gpt-4' });
  const { content } = await chat.invoke(formattedChatPrompt);

  if (CATEGORIES.includes(content as QuestionCategory)) {
    return content as QuestionCategory;
  } else {
    throw new Error('Wrong OpenAI response');
  }
};
