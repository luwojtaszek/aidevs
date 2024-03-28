import axios from 'axios';
import fs from 'fs/promises';

export type DownloadFileConfig = {
  url: string;
  outputDir: string;
  fileName: string;
};

export const downloadFile = async (config: DownloadFileConfig) => {
  const { url, outputDir, fileName } = config;

  await fs.mkdir(outputDir, { recursive: true });

  const response = await axios.get(url, { responseType: 'arraybuffer' });
  const fileData = Buffer.from(response.data, 'binary');

  await fs.writeFile(`${outputDir}/${fileName}`, fileData);
};
