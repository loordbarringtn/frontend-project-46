import path from 'path';
import fs from 'fs';
import parseData from './parser.js';
import buildDiff from './buildDiff.js';
import getFormatter from './formatters/index.js';

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const absolutePath1 = path.resolve(process.cwd(), filepath1);
  const absolutePath2 = path.resolve(process.cwd(), filepath2);

  const ext1 = path.extname(absolutePath1);
  const ext2 = path.extname(absolutePath2);

  try {
    // Читаем содержимое файлов
    const fileContent1 = fs.readFileSync(absolutePath1, 'utf-8');
    const fileContent2 = fs.readFileSync(absolutePath2, 'utf-8');

    // Передаем содержимое и расширение в parseData
    const data1 = parseData(fileContent1, ext1);
    const data2 = parseData(fileContent2, ext2);

    const diffTree = buildDiff(data1, data2);
    const formatter = getFormatter(format);
    return formatter(diffTree);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    throw err;
  }
};

export default gendiff;
