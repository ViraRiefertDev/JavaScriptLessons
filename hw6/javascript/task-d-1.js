"use strict";
// З клавіатури вводяться числа до тих пір, поки послідовність є зростаючою або спадною.
var _a, _b, _c;
if (confirm('Почати тестування?')) {
    let previousNumber = parseFloat((_a = prompt(`Введіть число`, '5')) !== null && _a !== void 0 ? _a : '5');
    let currentNumber = parseFloat((_b = prompt(`Введіть число`, '5')) !== null && _b !== void 0 ? _b : '5');
    const direction = Math.sign(previousNumber - currentNumber);
    let newDirection = direction;
    while (direction !== 0 && newDirection === direction) {
        previousNumber = currentNumber;
        currentNumber = parseFloat((_c = prompt(`Введіть число`, '5')) !== null && _c !== void 0 ? _c : '5');
        newDirection = Math.sign(previousNumber - currentNumber);
    }
}
