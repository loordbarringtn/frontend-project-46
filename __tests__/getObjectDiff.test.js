import path from 'path';
import fs from 'fs';
import YAML from 'yaml';
import { fileURLToPath } from 'url';
import { describe } from '@jest/globals';
import getObjectDiff from '../src/objectDiff.js';

// Определяем __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const getFileContent = (filename) => fs.readFileSync(getFixturePath(filename), 'utf8');

describe('getObjectDiff function test', () => {
  test('сравнение плоских файлов (JSON)', () => {
    const file1 = JSON.parse(getFileContent('file1.json')); // Преобразуем строку в объект
    const file2 = JSON.parse(getFileContent('file2.json')); // Преобразуем строку в объект
    const result = JSON.parse(getFileContent('test1Result.json')); // Результат тоже преобразуем в объект

    // Сравниваем с ожидаемым результатом
    expect(getObjectDiff(file1, file2)).toEqual(result);
  });
});

test('сравнение плоских файлов (YAML)', () => {
  const result = JSON.parse(getFileContent('test1Result.json')); // JSON результат
  // Файлы YAML парсятся автоматически в объект в программе
  const yamlFile1 = YAML.parse(getFileContent('file1.yml'));
  const yamlFile2 = YAML.parse(getFileContent('file2.yml'));

  expect(getObjectDiff(yamlFile1, yamlFile2)).toEqual(result);
});
