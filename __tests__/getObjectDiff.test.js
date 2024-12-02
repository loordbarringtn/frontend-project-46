import path from 'path';
import fs from 'fs';
import YAML from 'yaml';
import { fileURLToPath } from 'url';
import { describe, test, expect } from '@jest/globals';
import getObjectDiff from '../src/objectDiff.js';
import gendiff from '../src/index.js';

// Определяем __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const getFileContent = (filename) => fs.readFileSync(getFixturePath(filename), 'utf8');
describe('gendiff formatters tests', () => {
  test('стиль stylish с JSON файлами', () => {
    const file1Path = getFixturePath('file1.json');
    const file2Path = getFixturePath('file2.json');
    const expectedResult = getFileContent('expected_stylish_output.txt'); // Читаем эталонный результат в stylish формате

    // Проверяем результат работы gendiff
    expect(gendiff(file1Path, file2Path, 'stylish')).toBe(expectedResult);
  });
});
