import { api, BaseResponse } from '../../core/api.ts';
import { AnswerType, EmbeddingTaskResponse } from './types.ts';
import { extractUrls } from '../../core/utils.ts';
import { downloadFile } from '../../core/axios.ts';
import path from 'path';
import { OpenAIWhisperAudio } from 'langchain/document_loaders/fs/openai_whisper_audio';

const main = async (): Promise<BaseResponse> => {
  const token = (await api.auth({ taskName: 'whisper' })).token;

  const task = await api.getTask<EmbeddingTaskResponse>({
    token: token,
  });

  const audioUrl = extractUrls(task.msg)[0];
  const distDir = path.resolve(__dirname, '..', 'dist');
  const fileName = 'task_7_whisper.mp3';

  await downloadFile({
    url: audioUrl,
    outputDir: distDir,
    fileName: fileName,
  });

  const loader = new OpenAIWhisperAudio(`${distDir}/${fileName}`);
  const docs = await loader.load();

  return await api.answerTask<AnswerType>({
    token: token,
    answer: docs[0].pageContent,
  });
};

const answered = await main();
console.log(answered);
