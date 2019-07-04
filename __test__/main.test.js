const add = require('../src/main');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});
