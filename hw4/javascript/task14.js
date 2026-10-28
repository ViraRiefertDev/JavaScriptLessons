"use strict";
var _a, _b;
if (confirm('Почати тестування?')) {
    //Задача 11. Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами.
    let minNumber = parseInt((_a = prompt(`Введіть мінімальне число`, '1')) !== null && _a !== void 0 ? _a : '1');
    const maxNumber = parseInt((_b = prompt(`Введіть максимальне число`, '20')) !== null && _b !== void 0 ? _b : '20');
    const maxOddCount = 5;
    let sum = 0;
    const step = 2;
    minNumber++;
    if (minNumber % 2 === 0) {
        minNumber++;
    }
    let counter = 0;
    for (let i = minNumber; i < maxNumber && counter < maxOddCount; i += step, counter++) {
        sum += i;
    }
    document.write(`Сума перших ${counter} непарних чисел=${sum}`);
}
