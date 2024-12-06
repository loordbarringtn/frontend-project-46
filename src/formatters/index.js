import stylish from './stylish.js';
import plain from './plain.js';

const formatters = {
  stylish,
  plain,
  // другие форматтеры можно добавить сюда
};

const getFormatter = (format) => {
  if (!formatters[format]) {
    throw new Error(`Unknown format: ${format}`);
  }
  return formatters[format];
};

export default getFormatter;
