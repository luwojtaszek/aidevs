import { api, BaseResponse } from '../../core/api.ts';
import { AnswerType, GuessCharacterChatResponse, WhoamiTaskResponse } from './types.ts';
import { ChatPromptTemplate } from 'langchain/prompts';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { withErrorHandling } from '../../core/errors.ts';

const systemTemplate = `
You play a game and you need to guess the character based on provided CONTEXT.
Answer ultra-concisely using CONTEXT below and nothing more and truthfully say {{"recognized": false}} when the CONTEXT is not enough to give an answer.

Rules:
- Always return response as a JSON with structure {{"name": "Character Name", "recognized": true|false}}

examples###
"He was a main character in The Silence of the Lambs movie from 1991. Who is the character?"
{{"name": "Anthony Hopkins", "recognized": true}}

"He founded Microsoft company. Who is the character?"
{{"name": "", "recognized": false}}
"He founded Microsoft company. He's name is Bill. Who is the character?"
{{"name": "Bill Gates", "recognized": true}}
###

context###{context}###
`;

const humanTemplate = 'Who is the character?';

const chatPrompt = ChatPromptTemplate.fromMessages([
  ['system', systemTemplate],
  ['human', humanTemplate],
]);

const guessCharacter = async (context: string[]): Promise<GuessCharacterChatResponse> => {
  const formattedChatPrompt = await chatPrompt.formatMessages({
    context: context.join('\n'),
  });

  const chat = new ChatOpenAI({ modelName: 'gpt-4-1106-preview' }).bind({
    response_format: {
      type: 'json_object',
    },
  });

  const { content } = await chat.invoke(formattedChatPrompt);

  console.log(`Chat response: ${content}`);

  if (typeof content === 'string') {
    return JSON.parse(content) as GuessCharacterChatResponse;
  } else {
    throw new Error('Invalid response from OpenAI');
  }
};

const main = async (): Promise<BaseResponse> => {
  let context: string[] = [];

  const token = (await api.auth({ taskName: 'whoami' })).token;

  const maxHints = 10;
  let hintsCounter = 0;
  let character: GuessCharacterChatResponse | null = null;

  do {
    const task = await api.getTask<WhoamiTaskResponse>({
      token: token,
    });

    context.push(task.hint);

    const guessResponse = await guessCharacter(context);

    if (guessResponse.recognized) {
      character = guessResponse;
    }

    hintsCounter++;
  } while (!character && hintsCounter < maxHints);

  if (character && character.name) {
    return await api.answerTask<AnswerType>({
      token: token,
      answer: character.name,
    });
  }

  throw new Error('Invalid response from OpenAI');
};

const response = await withErrorHandling(main);
console.log(response);
