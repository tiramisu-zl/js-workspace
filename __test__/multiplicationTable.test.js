const printMultiplicationTable = require('../src/multiplicationTable');

describe('multiplication table', () => {
  it('should print multiplication table', () => {
    // given
    spyOn(console, 'log');

    // when
    printMultiplicationTable(2, 4);

    const expectText = `2*2=4
2*3=6  3*3=9
2*4=8  3*4=12  4*4=16`;

    // then
    expect(console.log).toHaveBeenCalledWith(expectText);
  });
});
