import { api, BaseResponse } from '../../core/api.ts';
import { ChatOpenAI } from '@langchain/openai';
import { HumanMessage, SystemMessage } from 'langchain/schema';

export type LiarTaskResponse = BaseResponse & {
  answer: string;
};

const token = (await api.auth({ taskName: 'liar' })).token;

const question = 'What is capitol of Poland?';

const form = new FormData();
form.append('question', question);

const task = await api.postTask<LiarTaskResponse>({
  token: token,
  body: form,
});

console.log(task);

const chat = new ChatOpenAI({ modelName: 'gpt-3.5-turbo' });

const { content } = await chat.invoke([
  new SystemMessage(`Return YES if the prompt: {prompt} is correct answer for the question###${question}### or NO if it is not correct.`),
  new HumanMessage(`${task.answer}`),
]);

const answered = await api.answerTask<string>({
  token: token,
  answer: content,
});

console.log(`\nResult:\n${JSON.stringify(answered, null, 2)}`);
