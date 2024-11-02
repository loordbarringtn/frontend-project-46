import _ from 'lodash';

const makeTree = (objects) => {
    // Сортируем объекты по ключу `key` в алфавитном порядке с помощью Lodash
    const sortedObjects = _.sortBy(objects, 'key');

    // Преобразуем отсортированные объекты в строки в нужном формате
    const formattedLines = sortedObjects
        .map(({ key, value, status }) => {
            switch (status) {
                case 'added':
                    return `  + ${key}: ${value}`;
                case 'deleted':
                    return `  - ${key}: ${value}`;
                case 'unchanged':
                    return `    ${key}: ${value}`;
                case 'changed':
                    return `  - ${key}: ${value.from}\n  + ${key}: ${value.to}`;
                default:
                    return '';
            }
        })
        .filter(line => line); // Убираем пустые строки на этапе создания массива

    // Формируем окончательный результат
    return `{\n${formattedLines.join('\n')}\n}`;
};
export default makeTree;