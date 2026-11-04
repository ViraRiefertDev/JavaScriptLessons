"use strict";
// Задача 2. Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.
var _a;
if (confirm('Почати тестування?')) {
    const isWorkingDay = function (dayNumber) {
        switch (dayNumber) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                return true;
            case 6:
            case 7:
                return false;
            default:
                throw new Error('Помилка не вірний день тижня');
        }
    };
    const dayNumber = parseInt((_a = prompt(`Введіть номер дня`, '5')) !== null && _a !== void 0 ? _a : '5');
    const message = isWorkingDay(dayNumber) ? 'робочий день' : 'вихідний день';
    document.write(`${dayNumber} день це ${message}`);
}
