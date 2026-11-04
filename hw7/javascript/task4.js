"use strict";
// Задача 4. Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів:
// кількість парних, кількість додатних, кількість більших за 100.
if (confirm('Почати тестування?')) {
    const numberThreshold = 100;
    const isEvenNumber = (number) => number % 2 === 0;
    const isPositiveNumber = (number) => number > 0;
    const isNumberGreaterThan = (number, threshold) => number > threshold;
    const getCountNumbersByCondition = (number1, number2, number3, conditionFunction) => Number(conditionFunction(number1)) +
        Number(conditionFunction(number2)) +
        Number(conditionFunction(number3));
    function getNumbersStats(number1, number2, number3) {
        const countOfEvenNumbers = getCountNumbersByCondition(number1, number2, number3, isEvenNumber);
        const countOfPositiveNumbers = getCountNumbersByCondition(number1, number2, number3, isPositiveNumber);
        const countOfNumbersGreaterThan = getCountNumbersByCondition(number1, number2, number3, (number) => isNumberGreaterThan(number, numberThreshold));
        return `кількість парних: ${countOfEvenNumbers}, кількість додатних: ${countOfPositiveNumbers}, кількість більших за 100: ${countOfNumbersGreaterThan}`;
    }
    document.write(getNumbersStats(3, 4, 500));
}
