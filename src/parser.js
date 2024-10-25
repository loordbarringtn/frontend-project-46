import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const parseFile = (filepath) => {
    const extname = path.extname(filepath).toLowerCase();
    const fileContent = fs.readFileSync(filepath, 'utf-8');

    switch (extname) {
        case '.json':
            return JSON.parse(fileContent);
        case '.yaml':
        case '.yml':
            return yaml.load(fileContent);
        default:
            throw new Error(`Unsupported file format: ${extname}`);
    }
};

export default parseFile;