import { api, BaseResponse } from '../../core/api.ts';
import { ChatOpenAI } from '@langchain/openai';
import { HumanMessage, SystemMessage } from 'langchain/schema';

export type AnswerType = Array<string>;

export type BloggerTaskResponse = BaseResponse & {
  blog: Array<string>;
};

const token = (await api.auth({ taskName: 'blogger' })).token;

const task = await api.getTask<BloggerTaskResponse>({
  token: token,
});

const chat = new ChatOpenAI({ modelName: 'gpt-4' });

const { content } = await chat.invoke([
  new SystemMessage(`
        As a Senior Content Editor, your task is to craft engaging and informative blog posts in response to the headers provided by users. Your responsibilities include:
        - Language Detection and Consistency: Automatically detect the language of the provided headers. Ensure that the content you generate is written in the same language as the headers to maintain consistency and provide a localized experience for the reader.
        - Content Creation Based on Headers: Develop content for each header that is informative, engaging, and relevant to the topic indicated by the header. Your content should reflect a thorough understanding of the subject matter and be tailored to the interests of the target audience.
        - JSON Array Format for Output: Present the final output as a JSON array, where each element corresponds to a header and its associated content. Each element of the array should be an object with two properties: 'header' (the title of the section) and 'content' (the text you have written for that section).
        Please ensure your output strictly adheres to the JSON format specified, as it will be used for further processing. Below is an example of the expected input and output format:
        Example###
        For input: ["Wstęp: kilka słów na temat historii pizzy","Niezbędne składniki na pizzę"]
        Return: 
        [
          {
              "header": "Wstęp: kilka słów na temat historii pizzy", 
              "content": "Pizza, w swojej najbardziej podstawowej formie, istnieje już od czasów starożytnych. Już starożytni Egipcjanie, Grecy i Rzymianie jedli potrawy przypominające pizzę, składające się z płaskiego chleba pokrytego różnymi dodatkami. Jednak współczesna pizza, jaką znamy dzisiaj, wywodzi się z Neapolu we Włoszech."
          },
          {
              "header": "Niezbędne składniki na pizzę", 
              "content": "Ponad 2,5 szklanki mąki pszennej - najlepiej typu 00 - 450 g, 1 szklanka ciepłej wody - 250 ml, łyżka ulubionej oliwy z oliwek, płaska łyżeczka suchych drożdży lub 15 g drożdży świeżych, płaska łyżeczka soli, płaska łyżeczka cukru."
          }
        ]
       ### 
    `),
  new HumanMessage(`${JSON.stringify(task.blog)}`),
]);

// fs.writeFileSync('out.json', content);

type OpenAiResponse = Array<{ header: string; content: string }>;

if (typeof content === 'string') {
  const answer = JSON.parse(content) as OpenAiResponse;

  const answered = await api.answerTask<AnswerType>({
    token: token,
    answer: answer.map((it) => it.content),
  });

  console.log(answered);
}
