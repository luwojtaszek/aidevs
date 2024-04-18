import { api, BaseResponse } from '../../core/api.ts';
import { AnswerType, MemeTaskResponse, RenderFormResponse } from './types.ts';
import { withErrorHandling } from '../../core/errors.ts';
import { axiosInstance } from '../../core/axios.ts';

const TASK_NAME = 'meme';
const main = async (): Promise<BaseResponse> => {
  const token = (await api.auth({ taskName: TASK_NAME })).token;

  const task = await api.getTask<MemeTaskResponse>({
    token: token,
  });

  const meme = await axiosInstance
    .post<RenderFormResponse>(
      'https://api.renderform.io/api/v2/render',
      {
        template: 'fat-ogres-stomp-badly-1166',
        data: {
          'image.src': task.image,
          'title.text': task.text,
        },
      },
      { headers: { 'X-Api-Key': process.env.RENDERFORM_API_KEY } }
    )
    .then((r) => r.data);

  console.log(`Meme created: ${JSON.stringify(meme, null, 2)}`);

  return await api.answerTask<AnswerType>({
    token: token,
    answer: meme.href,
  });
};

const response = await withErrorHandling(main, { logError: true });
console.log(response);

// id: fat-ogres-stomp-badly-1166
// image, title

// Solution:
//
//   1. Register on RenderForm website https://renderform.io/
//   2. Create new Template there
// - remember ID of this template. You will use it in the API
// - template should have black background (just fill rectangle with black color)
// - there should be huge image container in the center (give it a simple 'NAME')
// - put text container under the image, and set color to white (also, give container a NAME!)
// - save your template
// 3. Use API or module inside Make to create new image. You have to send some extra variables
// - here is API documentation: https://renderform.io/docs/api/get-started/
//   - for Make, you don't need any doc. It's just click & play
// - you will get meme image and text directly from /task/ endpoint
// 4. Send image URL (RenderForm will provide it to you) and send it to /answer/
// {
//   "answer":"	https://cdn.renderform.io/...................jpg"
// }
//
//
// ____________
//
// Some additional tips:
//
//   - to change text on the template, use property "NAME.text"
// - to change source of the image, use property "NAME.src"
