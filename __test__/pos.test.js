'use strict';

const printReceipt = require('../pos');

describe('pos', () => {

  it('should print text', () => {

    const tags = ['0001', '0003', '0005', '0003'];

    spyOn(console, 'log');

    printReceipt(tags);

    const expectText = `Receipts
------------------------------------------------------------
Coca Cola                       3          1
Pepsi-Cola                       5          2
Dr Pepper                       7          1
------------------------------------------------------------
Price: 20`;

    expect(console.log).toHaveBeenCalledWith(expectText);
  });
});
