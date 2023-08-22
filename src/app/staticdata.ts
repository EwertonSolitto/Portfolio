import path from 'path';
import { promises as fs } from 'fs';

export default async function getData(req: string) {
  const filePath = path.join(process.cwd(), '/src/app/json');

  const fileContents = await fs.readFile(filePath + req)

  return JSON.parse(fileContents.toString())
}