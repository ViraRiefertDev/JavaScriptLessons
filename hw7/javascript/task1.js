"use strict";
// Задача 1. Створити функцію, яка за номером місяця повертає його назву.
var _a;
if (confirm('Почати тестування?')) {
    function getMonthName(monthNumber = 5) {
        switch (monthNumber) {
            case 1:
                return 'January';
            case 2:
                return 'February';
            case 3:
                return 'March';
            case 4:
                return 'April';
            case 5:
                return 'May';
            case 6:
                return 'June';
            case 7:
                return 'July';
            case 8:
                return 'August';
            case 9:
                return 'September';
            case 10:
                return 'October';
            case 11:
                return 'November';
            case 12:
                return 'December';
            default:
                return 'unknown';
        }
    }
    const monthNumber = parseInt((_a = prompt(`Введіть номер місяця`, '5')) !== null && _a !== void 0 ? _a : '5');
    const monthName = getMonthName(monthNumber);
    document.write(`${monthNumber} month -> ${monthName}`);
}
