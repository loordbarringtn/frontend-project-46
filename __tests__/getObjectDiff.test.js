import path from 'path';
import fs from 'fs';
import YAML from 'yaml';
import { fileURLToPath } from 'url';
import { describe, test, expect } from '@jest/globals';
import gendiff from '../src/index.js';

// Определяем __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const getFileContent = (filename) => fs.readFileSync(getFixturePath(filename), 'utf8');
describe('gendiff function formatters tests', () => {
  test('stylish format with JSON files', () => {
    const file1Path = getFixturePath('file1.json');
    const file2Path = getFixturePath('file2.json');
    const expectedResult = getFileContent('expected_stylish_output.txt'); // Читаем эталонный результат в stylish формате

    // Проверяем результат работы gendiff
    expect(gendiff(file1Path, file2Path, 'stylish')).toBe(expectedResult);
  });

  test('stylish format with YAML files', () => {
    const file1Path = getFixturePath('file1.yml');
    const file2Path = getFixturePath('file2.yml');
    const expectedResult = getFileContent('expected_stylish_output.txt'); // Читаем эталонный результат

    const file1Content = YAML.parse(file1Path); // Парсим YAML-файл 1
    const file2Content = YAML.parse(file2Path); // Парсим YAML-файл 2

    const result = gendiff(file1Content, file2Content);
    expect(result).toBe(expectedResult);
  });

  test('plain format with JSON files', () => {
    const file1Path = getFixturePath('file1.json');
    const file2Path = getFixturePath('file2.json');
    const expectedResult = getFileContent('expected_plain_output.txt'); // Читаем эталонный результат

    expect(gendiff(file1Path, file2Path, 'plain')).toBe(expectedResult);
  });

  test('plain format with YAML files', () => {
    const file1Path = getFixturePath('file1.yml');
    const file2Path = getFixturePath('file2.yml');
    const expectedResult = getFileContent('expected_plain_output.txt'); // Читаем эталонный результат

    const file1Content = YAML.parse(file1Path); // Парсим YAML-файл 1
    const file2Content = YAML.parse(file2Path); // Парсим YAML-файл 2

    expect(gendiff(file1Content, file2Content, 'plain')).toBe(expectedResult);
  });

  test('json format with JSON files', () => {
    const file1Path = getFixturePath('file1.json');
    const file2Path = getFixturePath('file2.json');
    const expectedResult = getFileContent('expected_json_output.txt'); // Читаем эталонный результат

    expect(gendiff(file1Path, file2Path, 'json')).toBe(expectedResult);
  });

  test('json format with YAML files', () => {
    const file1Path = getFixturePath('file1.yml');
    const file2Path = getFixturePath('file2.yml');
    const expectedResult = getFileContent('expected_json_output.txt');

    const file1Content = YAML.parse(file1Path); // Парсим YAML-файл 1
    const file2Content = YAML.parse(file2Path); // Парсим YAML-файл 2

    const result = gendiff(file1Content, file2Content, 'json');
    expect(result).toBe(expectedResult);// Читаем эталонный результат
  });
});
