"use strict";
if (confirm('Почати тестування?')) {
    // Задача 8. Користувач загадує число. За 3 спроби комп’ютер намагається вгадати число користувача (використати confirm).
    const maxNumber = 100;
    const minNumber = 1;
    const numberOfAttempts = 3;
    let resultMsg = '';
    const gameStart = confirm('Пограємо в гру вгадай число?\nЗагадайте число від 1 до 100');
    if (gameStart) {
        for (let i = 1; i <= numberOfAttempts; i++) {
            const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
            const isCorrectNumber = confirm(`Це число ${randomNumber}?`);
            if (isCorrectNumber) {
                resultMsg = `Ура вгадав з ${i} разу`;
                break;
            }
        }
        if (!resultMsg) {
            resultMsg = 'На жаль не вгадав';
        }
        document.write(resultMsg);
    }
    else {
        document.write('До побачення!');
    }
}
