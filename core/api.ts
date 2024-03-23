import axios, {AxiosResponse} from "axios";
import {env} from "process";

export type BaseResponse = {
  code: number;
  msg: string;
};

export type AuthResponse = BaseResponse & {
  token: string;
};

function validatedResponse(r: AxiosResponse): AxiosResponse {
  if (r.status === 200 && r.data.code === 0) {
    return r;
  } else {
    throw new Error(`Wrong API response: ${JSON.stringify(r.data)}. Response code: ${r.status}`);
  }
}

const axiosInstance = axios.create({
  baseURL: "https://tasks.aidevs.pl",
  headers: {
    'Accept-Encoding': 'gzip'
  }
});

axiosInstance.interceptors.response.use(
  response => validatedResponse(response),
  error => Promise.reject(error)
);

interface Api {
  auth(params: {taskName: string}): Promise<AuthResponse>;

  getTask<T extends BaseResponse>(params: {token: string}): Promise<T>;

  answerTask<T>(params: {token: string; answer: T}): Promise<BaseResponse>;
}

export const api: Api = {
  auth: async (params: {taskName: string}): Promise<AuthResponse> => {
    const data = {apikey: env.AIDEVS_API_KEY};
    return axiosInstance.post<AuthResponse>(`/token/${params.taskName}`, data).then(r => r.data);
  },
  getTask: async <T extends BaseResponse>(params: {token: string}): Promise<T> => {
    return axiosInstance.get<T>(`/task/${params.token}`).then(r => r.data);
  },
  answerTask: async <T>(params: {token: string; answer: T}): Promise<BaseResponse> => {
    return axiosInstance.post<BaseResponse>(`/answer/${params.token}`, {answer: params.answer}).then(r => r.data);
  }
};
