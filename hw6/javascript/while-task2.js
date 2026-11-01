"use strict";
var _a;
// З клавіатури вводитяться числа поки не буде введено 0. Знайти добуток чисел.
if (confirm('Почати тестування?')) {
    let userNumber = 1;
    let product = 1;
    do {
        product *= userNumber;
        userNumber = parseFloat((_a = prompt(`Введіть число, \nякщо введете 0 я порахую добуток ведених вами чисел`, '10')) !== null && _a !== void 0 ? _a : '10');
    } while (userNumber !== 0);
    document.write(`Добуток чисел  = ${product}`);
}
