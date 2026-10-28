"use strict";
//  Поступово генерувати 100 випадкових чисел від 1 до 1000.
// Підрахувати яких чисел більше: парних чи непарних.
if (confirm('Почати тестування?')) {
    const COUNT_OF_RANDOM_NUMBER = 100;
    const MIN_RANDOM_NUMBER = 1;
    const MAX_RANDOM_NUMBER = 1000;
    let countOfEvenNumbers = 0;
    let countOfOddNumbers = 0;
    let resultMessage = '';
    for (let i = 0; i < COUNT_OF_RANDOM_NUMBER; i++) {
        const randomNumber = Math.floor(Math.random() * (MAX_RANDOM_NUMBER - MIN_RANDOM_NUMBER + 1)) + MIN_RANDOM_NUMBER;
        randomNumber % 2 === 0 ? countOfEvenNumbers++ : countOfOddNumbers++;
    }
    if (countOfEvenNumbers > countOfOddNumbers) {
        resultMessage = 'Кількість парних чисел більше';
    }
    else if (countOfEvenNumbers < countOfOddNumbers) {
        resultMessage = 'Кількість непарних чисел більше';
    }
    else {
        resultMessage = 'Кількість парних та непарних чисел однакова';
    }
    document.write(`
  <p>${countOfEvenNumbers}: ${countOfOddNumbers}</p>
  <p>${resultMessage}</p>
  `);
    console.log(countOfEvenNumbers, countOfOddNumbers, resultMessage);
}
