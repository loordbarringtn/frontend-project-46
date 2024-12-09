import _ from 'lodash';

const getObjectDiff = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  const allKeys = _.union(obj1Keys, obj2Keys);

  const buildResult = (result, key) => {
    if (Object.prototype.hasOwnProperty.call(obj1, key)
        && !Object.prototype.hasOwnProperty.call(obj2, key)) {
      return result.concat({ key, value: obj1[key], status: 'deleted' });
    }

    if (!Object.prototype.hasOwnProperty.call(obj1, key)
        && Object.prototype.hasOwnProperty.call(obj2, key)) {
      return result.concat({ key, value: obj2[key], status: 'added' });
    }

    if (obj1[key] !== obj2[key]) {
      return result.concat({ key, value: { from: obj1[key], to: obj2[key] }, status: 'changed' });
    }

    return result.concat({ key, value: obj1[key], status: 'unchanged' });
  };

  return allKeys.reduce(buildResult, []);
};

export default getObjectDiff;
