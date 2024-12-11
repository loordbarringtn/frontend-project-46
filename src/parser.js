import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const parseFile = (filepath) => {
  const extname = path.extname(filepath).toLowerCase();
  const fileContent = fs.readFileSync(filepath, 'utf-8');

  try {
    if (extname === '.json') {
      return JSON.parse(fileContent);
    } if (extname === '.yaml' || extname === '.yml') {
      return yaml.load(fileContent);
    }
    throw new Error(`Unsupported file extension: ${extname}`);
  } catch (err) {
    console.error(`Failed to parse ${filepath}: ${err.message}`);
    process.exit(1);
  }
};

//   if (extname === '.json') {
//     return JSON.parse(fileContent);
//   } if (extname === '.yaml' || extname === '.yml') {
//     return yaml.load(fileContent);
//   }
//   throw new Error(`Unsupported file format: ${extname}`);
// };

export default parseFile;
