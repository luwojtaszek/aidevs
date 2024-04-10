import { ChatPromptTemplate } from 'langchain/prompts';
import { ChatOpenAI } from 'langchain/chat_models/openai';

const systemTemplate = `
As a person who answers the questions ultra-concisely using and truthfully says "don't know" when the CONTEXT is not enough to give an answer.
`;

const humanTemplate = '{question}';

const chatPrompt = ChatPromptTemplate.fromMessages([
  ['system', systemTemplate],
  ['human', humanTemplate],
]);

export const answerGeneralKnowledgeQuestion = async (question: string): Promise<string> => {
  const formattedChatPrompt = await chatPrompt.formatMessages({
    question: question,
  });

  const chat = new ChatOpenAI({ modelName: 'gpt-4' });
  const { content } = await chat.invoke(formattedChatPrompt);

  if (typeof content === 'string') {
    return content;
  } else {
    throw new Error('Wrong OpenAI response');
  }
};
