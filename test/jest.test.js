test('I must know the main assertions of Jest', () => {
  let number = null;
  expect(number).toBeNull();
  number = 10;
  expect(number).not.toBeNull();
  expect(number).toBe(10);
  expect(number).toEqual(10);
  expect(number).toBeGreaterThan(9);
  expect(number).toBeLessThan(11);
});

test('I must know how to work with objects', () => {
  const obj = { name: 'Antonio', mail: 'antonio@mail.com' };
  expect(obj).toHaveProperty('name');
  expect(obj).toHaveProperty('name', 'Antonio');
  expect(obj.name).toBe('Antonio');

  const obj2 = { name: 'Antonio', mail: 'antonio@mail.com' };
  expect(obj).toEqual(obj2);
  expect(obj).toBe(obj);
});
