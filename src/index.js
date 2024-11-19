import path from 'path';
import parseFile from './parser.js';
import getObjectDiff from './objectDiff.js';
import makeTree from './makeTree.js';

const gendiff = (filepath1, filepath2) => {
  const absolutePath1 = path.resolve(process.cwd(), filepath1);
  const absolutePath2 = path.resolve(process.cwd(), filepath2);

  try {
    // Парсинг обоих файлов
    const data1 = parseFile(absolutePath1);
    const data2 = parseFile(absolutePath2);

    console.log(data1);
    console.log(data2);

    const objectDiffs = getObjectDiff(data1, data2);
    console.log(objectDiffs);
    console.log(makeTree(objectDiffs));
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
};

export default gendiff;
