import {api, BaseResponse} from "../../core/api.ts";

export type TestTaskResponse = BaseResponse & {
  cookie: string;
};

const testTaskToken = (await api.auth({taskName: "HelloAPI"})).token;

const testTask = await api.getTask<TestTaskResponse>({
  token: testTaskToken
});

const answered = await api.answerTask<string>({
  token: testTaskToken,
  answer: testTask.cookie
});

console.log(answered);
