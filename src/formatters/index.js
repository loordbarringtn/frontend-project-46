import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatters = {
  stylish,
  plain,
  json,
  // другие форматтеры можно добавить сюда
};

const getFormatter = (format) => {
  if (!formatters[format]) {
    throw new Error(`Unknown format: ${format}`);
  }
  return formatters[format];
};

export default getFormatter;
