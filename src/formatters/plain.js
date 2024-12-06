import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value) && value !== null) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return String(value);
};

const plain = (diff, parentPath = '') => {
  const lines = diff.map((node) => {
    const {
      key, type, value, oldValue, newValue, children,
    } = node;

    const propertyPath = parentPath === '' ? key : `${parentPath}.${key}`;

    switch (type) {
      case 'added':
        return `Property '${propertyPath}' was added with value: ${stringify(value)}`;
      case 'removed':
        return `Property '${propertyPath}' was removed`;
      case 'unchanged':
        return '';
      case 'updated':
        return `Property '${propertyPath}' was updated. From ${stringify(oldValue)} to ${stringify(newValue)}`;
      case 'nested':
        // Рекурсивно обрабатываем потомков, передавая им обновлённый путь
        return plain(children, propertyPath);
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  });

  // Фильтруем пустые строки и объединяем результат с переносами строк
  return lines.filter((line) => line !== '').join('\n');
};

export default plain;
