'use strict';

function printMultiplicationTable(start, end) {
    if (!isInputValid(start, end)) {
        return null;
    }
    let outStr = buildTable(start, end);
    printTable(outStr);
}

function isInputValid(start, end) {
    return start < end;
}

function buildTable(start, end) {
    let outStr = '';
    for (let i = start; i <= end; i++) {
        for (let j = start; j <= i; j++) {
            const endStr = j === i ? '' : '  ';
            outStr += j + '*' + i + '=' + (i * j) + endStr;
        }
        outStr += i === end ? '' : '\n';
    }
    return outStr;
}

function printTable(str) {
    console.log(str);
}

module.exports = printMultiplicationTable;