import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { describe } from '@jest/globals';
import getObjectDiff from '../src/objectDiff.js';

// Определяем __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const getFileContent = (filename) => fs.readFileSync(getFixturePath(filename), 'utf8');

describe('getObjectDiff function test', () => {
  test('сравнение плоских файлов', () => {
    const file1 = JSON.parse(getFileContent('file1.json')); // Преобразуем строку в объект
    const file2 = JSON.parse(getFileContent('file2.json')); // Преобразуем строку в объект
    const result = JSON.parse(getFileContent('test1Result.json')); // Результат тоже преобразуем в объект

    // Сравниваем с ожидаемым результатом
    expect(getObjectDiff(file1, file2)).toEqual(result);
  });
});
