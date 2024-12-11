import yaml from 'js-yaml';

const parseData = (data, extension) => {
  const ext = extension.toLowerCase();

  if (ext === '.json') {
    return JSON.parse(data);
  }

  if (ext === '.yaml' || ext === '.yml') {
    return yaml.load(data);
  }

  throw new Error(`Unsupported file format: ${ext}`);
};

export default parseData;
