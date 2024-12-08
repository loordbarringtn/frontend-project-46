import path from 'path';
import parseFile from './parser.js';
import buildDiff from './buildDiff.js';
import getFormatter from './formatters/index.js';

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const absolutePath1 = path.resolve(process.cwd(), filepath1);
  const absolutePath2 = path.resolve(process.cwd(), filepath2);

  try {
    const data1 = parseFile(absolutePath1);
    const data2 = parseFile(absolutePath2);

    const diffTree = buildDiff(data1, data2); // Создаем дерево различий
    const formatter = getFormatter(format); // Получаем нужный форматтер
    return formatter(diffTree); // Форматируем дерево различий
  } catch (err) {
    console.error(`Error: ${err.message}`);
    throw err;
  }
};

export default gendiff;
