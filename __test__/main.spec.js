const add = require('../src/main');

it('should add two numbers', function () {
    expect(add(2, 3)).toBe(5);
});