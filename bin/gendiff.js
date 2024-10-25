#!/usr/bin/env node
import { program } from 'commander';
import gendiff from '../src/index.js';

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0')
    .helpOption('-h, --help', 'output usage information')
    .option('-f, --format <type>', 'output format', 'stylish')  // Опция формата
    .argument('<filepath1>', 'path to first file')
    .argument('<filepath2>', 'path to second file')
    .action((filepath1, filepath2, options) => {
        gendiff(filepath1, filepath2, options);  // Передаем опции в функцию
    });

program.parse();