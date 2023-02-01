const stringLength = require('./string-length');
test('Char in "Hello!"', () => {
  expect(stringLength('Hello!')).toBeTruthy();
});
test('Char in "I love America"', () => {
  expect(stringLength('I love America')).toBeFalsy();
});
test('Empty string', () => {
  expect(stringLength('')).toBeFalsy();
});
test('Characters in "Surya"', () => {
  expect(stringLength('Surya')).toBeTruthy();
});