# Project: Difference Calculator

### Hexlet tests and linter status:
[![Actions Status](https://github.com/loordbarringtn/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/loordbarringtn/frontend-project-46/actions) [![Maintainability](https://api.codeclimate.com/v1/badges/057510eb71a1975b24e9/maintainability)](https://codeclimate.com/github/loordbarringtn/frontend-project-46/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/057510eb71a1975b24e9/test_coverage)](https://codeclimate.com/github/loordbarringtn/frontend-project-46/test_coverage)

**"Difference calculator"** is a program that determines the difference between two data structures. This is a popular task, for which there are many online services, for example https://www.jsondiff.com. A similar mechanism is used when outputting tests or when automatically tracking changes in configuration files.

Features of the utility:

- Supports various input formats: yaml, json;
- Report generation as plain text, stylish and json.

### Install
Clone this repo:
```
git clone https://github.com/loordbarringtn/frontend-project-46
```

In project folder:
```
make install
```
```
npm link
```
### Usage
To read help:
```
gendiff -h
```

To see version:
```
gendiff -V
```

To compare two files:
```
gendiff <path to file1> <path to file2>
```

To select the output format:
```
gendiff --format <formatType> <path to file1> <path to file2>
```
### Compare two JSON files with nested objects (stylish format):
[![asciicast](https://asciinema.org/a/hJzhobziTkpovbCwhPHzuvMuI.svg)](https://asciinema.org/a/hJzhobziTkpovbCwhPHzuvMuI)

### Compare two JSON files with nested objects (plain format):
[![asciicast](https://asciinema.org/a/GX21jhJLSOP9DOIC8a8DFoMpf.svg)](https://asciinema.org/a/GX21jhJLSOP9DOIC8a8DFoMpf)

### Compare two JSON files with nested objects (json format):
[![asciicast](https://asciinema.org/a/knGFeByQKprx7WoN7jtdZqPlj.svg)](https://asciinema.org/a/knGFeByQKprx7WoN7jtdZqPlj)