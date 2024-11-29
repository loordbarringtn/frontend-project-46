import _ from 'lodash';

const getObjectDiff = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  const allKeys = _.union(obj1Keys, obj2Keys);
  const acc = (acc, key) => {
    if (Object.prototype.hasOwnProperty.call(obj1, key)
        && !Object.prototype.hasOwnProperty.call(obj2, key)) {
      acc.push({ key, value: obj1[key], status: 'deleted' });
    } else if (!Object.prototype.hasOwnProperty.call(obj1, key)
        && Object.prototype.hasOwnProperty.call(obj2, key)) {
      acc.push({ key, value: obj2[key], status: 'added' });
    } else if (obj1[key] !== obj2[key]) {
      acc.push({ key, value: { from: obj1[key], to: obj2[key] }, status: 'changed' });
    } else {
      acc.push({ key, value: obj1[key], status: 'unchanged' });
    }
    return acc; // Возвращаем аккумулятор
  };

  // Передаем начальное значение в reduce (пустой массив)
  return allKeys.reduce(acc, []);
};

export default getObjectDiff;
