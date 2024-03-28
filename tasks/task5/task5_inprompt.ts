import { api, BaseResponse } from '../../core/api.ts';
import { ChatOpenAI } from '@langchain/openai';
import { HumanMessage, SystemMessage } from 'langchain/schema';

export type AnswerType = string;

export type InPromptTaskResponse = BaseResponse & {
  input: Array<string>;
  question: string;
};

const token = (await api.auth({ taskName: 'inprompt' })).token;

const task = await api.getTask<InPromptTaskResponse>({
  token: token,
});

const chat = new ChatOpenAI({ modelName: 'gpt-4' });

async function resolvePersonName(question: string): Promise<string> {
  const { content } = await chat.invoke([
    new SystemMessage(`
        Hey, I'm going to ask you a question about some person. 
        Please, extract the name of the person from the question and provide it as an answer.
        You should provide the person's name in the answer and nothing else.
        
        Examples###
        Question: co lubi jeść na śniadanie Alojzy?
        Result: Alojzy
        ###
    `),
    new HumanMessage(question),
  ]);

  if (typeof content === 'string') {
    return content;
  } else {
    throw new Error(`Invalid response type: ${typeof content} from OpenAI`);
  }
}

function filterInput(input: Array<string>, personName: string): Array<string> {
  const personNameLowerCased = personName.toLowerCase();
  return input.filter((question) => question.toLowerCase().includes(personNameLowerCased));
}

async function answerQuestion(questions: string, context: Array<String>): Promise<string> {
  const { content } = await chat.invoke([
    new SystemMessage(`
        Hey, I'm going to ask you a question about some person. 
        Answer the questions ultra-concisely using CONTEXT below and nothing more and truthfully says "don't know" when the CONTEXT is not enough to give an answer.
        
        context###${context.join('\n')}###
    `),
    new HumanMessage(task.question),
  ]);

  if (typeof content === 'string') {
    return content;
  } else {
    throw new Error(`Invalid response type: ${typeof content} from OpenAI`);
  }
}

const personName = await resolvePersonName(task.question);
const filteredInput = filterInput(task.input, personName);
const answer = await answerQuestion(task.question, filteredInput);

const answered = await api.answerTask<AnswerType>({
  token: token,
  answer: answer,
});

console.log(answered);
