import stylish from './stylish.js';

const formatters = {
  stylish,
  // другие форматтеры можно добавить сюда
};

const getFormatter = (format) => {
  if (!formatters[format]) {
    throw new Error(`Unknown format: ${format}`);
  }
  return formatters[format];
};

export default getFormatter;
