import getObjectDiff from '../src/objectDiff.js';

describe('getObjectDiff', () => {
  test('добавление нового ключа', () => {
    const obj1 = { id: 1, name: 'Math' };
    const obj2 = { id: 1, name: 'Math', level: 'advanced' };

    const expected = [
      { key: 'id', value: 1, status: 'unchanged' },
      { key: 'name', value: 'Math', status: 'unchanged' },
      { key: 'level', value: 'advanced', status: 'added' },
    ];

    expect(getObjectDiff(obj1, obj2)).toEqual(expected);
  });

  test('удаление ключа', () => {
    const obj1 = { id: 1, name: 'Math', level: 'beginner' };
    const obj2 = { id: 1, name: 'Math' };

    const expected = [
      { key: 'id', value: 1, status: 'unchanged' },
      { key: 'name', value: 'Math', status: 'unchanged' },
      { key: 'level', value: 'beginner', status: 'deleted' },
    ];

    expect(getObjectDiff(obj1, obj2)).toEqual(expected);
  });

  test('изменение значения ключа', () => {
    const obj1 = { id: 1, name: 'Math', level: 'beginner' };
    const obj2 = { id: 1, name: 'Math', level: 'advanced' };

    const expected = [
      { key: 'id', value: 1, status: 'unchanged' },
      { key: 'name', value: 'Math', status: 'unchanged' },
      { key: 'level', value: { from: 'beginner', to: 'advanced' }, status: 'changed' },
    ];

    expect(getObjectDiff(obj1, obj2)).toEqual(expected);
  });
});
