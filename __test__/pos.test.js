'use strict';

const printReceipt = require('../src/pos');

describe('pos', () => {

  it('should print text', () => {

    const tags = ['0001', '0003', '0005', '0003'];

    spyOn(console, 'log');

    printReceipt(tags);

    const expectText = `Receipts
------------------------------------------------------------
Coca Cola\t\t\t\t\t\t3\t\t\t1
Pepsi-Cola\t\t\t\t\t\t5\t\t\t2
Dr Pepper\t\t\t\t\t\t7\t\t\t1
------------------------------------------------------------
Price: 20`;

    expect(console.log).toHaveBeenCalledWith(expectText);
  });
});
