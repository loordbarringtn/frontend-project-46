import _ from 'lodash';

const indent = (depth) => ' '.repeat(depth * 4 - 2); // Основной отступ для строки
const bracketIndent = (depth) => ' '.repeat((depth - 1) * 4); // Отступ для закрывающей скобки

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }

  const entries = Object.entries(value)
    .map(([key, val]) => `${indent(depth + 1)}  ${key}: ${stringify(val, depth + 1)}`);
  return `{\n${entries.join('\n')}\n${bracketIndent(depth + 1)}}`;
};

const stylish = (diff, depth = 1) => {
  const lines = diff.map((node) => {
    const {
      key, type, value, oldValue, newValue, children,
    } = node;

    switch (type) {
      case 'added':
        return `${indent(depth)}+ ${key}: ${stringify(value, depth)}`;
      case 'removed':
        return `${indent(depth)}- ${key}: ${stringify(value, depth)}`;
      case 'unchanged':
        return `${indent(depth)}  ${key}: ${stringify(value, depth)}`;
      case 'updated':
        return [
          `${indent(depth)}- ${key}: ${stringify(oldValue, depth)}`,
          `${indent(depth)}+ ${key}: ${stringify(newValue, depth)}`,
        ].join('\n');
      case 'nested':
        return `${indent(depth)}  ${key}: ${stylish(children, depth + 1)}`;
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  });

  return `{\n${lines.join('\n')}\n${bracketIndent(depth)}}`; // Добавляем фигурные скобки здесь
};

export default stylish;
