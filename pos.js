'use strict';

function loadGoodsInfo() {
    return [
        {"id": "0001", "name" : "Coca Cola", "price": 3},
        {"id": "0002", "name" : "Diet Coke", "price": 4},
        {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
        {"id": "0004", "name" : "Mountain Dew", "price": 6},
        {"id": "0005", "name" : "Dr Pepper", "price": 7},
        {"id": "0006", "name" : "Sprite", "price": 8},
        {"id": "0007", "name" : "Diet Pepsi", "price": 9},
        {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
        {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
        {"id": "0010", "name" : "Fanta", "price": 12}
    ];
}

function printReceipt(inputs) {
    const goodsInfo = loadGoodsInfo();
    const countedGoods = countGoods(inputs);
    const goodsList = getGoodList(countedGoods, goodsInfo);
    const summary = getSummary(goodsList);
    const receipt = buildReceipt(goodsList, summary);
    console.log(receipt);
}

function countGoods(inputs) {
    const countedGoods = [];
    inputs.forEach(input => {
        const findGood = countedGoods.find(good => good.id === input);
        if (findGood) {
            findGood.number += 1;
        } else {
            countedGoods.push({
                id: input,
                number: 1,
            });
        }
    });
    return countedGoods;
}

function getGoodList(countedGoods, goodsInfo) {
    const goods = [];
    countedGoods.forEach(item => {
        const findGood = goodsInfo.find(good => good.id === item.id);
        const number = item.number;
        const subtotal = findGood.price * number;
        goods.push(
            {
                ...findGood,
                number,
                subtotal,
            }
        );
    });
    return goods;
}

function getSummary(goods) {
    const totalPrices = goods.reduce((acc, good) => acc + good.subtotal, 0);
    return {
        totalPrices,
    }
}

function buildReceipt(goods, summary) {
    const head = 'Receipts\n';
    const splitLine = '------------------------------------------------------------\n';
    const goodInfoStr = goods.map(good => {
        return `${good.name}                       ${good.price}          ${good.number}\n`;
    });
    const summaryStr = `Price: ${summary.totalPrices}`;


    return head + splitLine + goodInfoStr.join('') + splitLine + summaryStr;
}

module.exports = printReceipt;