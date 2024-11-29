#!/usr/bin/env node
import { program } from 'commander';
import gendiff from '../src/index.js';

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format <type>', 'output format', 'stylish') // Указание форматера по умолчанию
  .action((filepath1, filepath2, options) => {
    const diff = gendiff(filepath1, filepath2, options.format);
    console.log(diff);
  });

program.parse();
