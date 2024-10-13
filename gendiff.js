#!/usr/bin/env node

import { program } from 'commander';

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0') // Определяем версию программы
    .helpOption('-h, --help', 'output usage information'); // Добавляем кастомную опцию для справки

program.parse();