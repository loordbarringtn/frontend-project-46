import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { describe, test, expect } from '@jest/globals';
import gendiff from '../src/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const getFileContent = (filename) => fs.readFileSync(getFixturePath(filename), 'utf8');

// Вспомогательная функция для сокращения кода тестов
const runTest = (description, file1Name, file2Name, format, expectedFileName) => {
  test(description, () => {
    const file1Path = getFixturePath(file1Name);
    const file2Path = getFixturePath(file2Name);
    const expectedResult = getFileContent(expectedFileName);

    expect(gendiff(file1Path, file2Path, format)).toBe(expectedResult);
  });
};

describe('gendiff function formatters tests', () => {
  runTest('stylish with JSON files', 'file1.json', 'file2.json', 'stylish', 'expected_stylish_output.txt');
  runTest('stylish with YAML files', 'file1.yml', 'file2.yml', 'stylish', 'expected_stylish_output.txt');

  runTest('plain with JSON files', 'file1.json', 'file2.json', 'plain', 'expected_plain_output.txt');
  runTest('plain with YAML files', 'file1.yml', 'file2.yml', 'plain', 'expected_plain_output.txt');

  runTest('json with JSON files', 'file1.json', 'file2.json', 'json', 'expected_json_output.txt');
  runTest('json with YAML files', 'file1.yml', 'file2.yml', 'json', 'expected_json_output.txt');
});
