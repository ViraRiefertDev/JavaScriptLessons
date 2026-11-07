"use strict";
// Задача 8. Дано одновимірний масив, у якому зберігається певна виграшна сума
// (елементи заповнюються випадковим чином значеннями від -500 до 500).
// Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться).
// Знаходити сумарний виграш.
if (confirm('Почнемо гру?')) {
    const getRandomNumber = (minNumber, maxNumber) => Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    function getArrayWithRandomNumbers(arraySize, minNumber, maxNumber) {
        const arrayWithRandomNumbers = new Array(arraySize);
        for (let i = 0; i < arrayWithRandomNumbers.length; i++) {
            arrayWithRandomNumbers[i] = getRandomNumber(minNumber, maxNumber);
        }
        return arrayWithRandomNumbers;
    }
    function calculateTotalWinnings(winArray) {
        let sum = 0;
        for (let i = 0; i < winArray.length; i++) {
            sum += winArray[i];
        }
        return sum;
    }
    function playGame() {
        var _a, _b;
        const minNumber = -500;
        const maxNumber = 500;
        const arraySize = parseInt((_a = prompt(`Введіть кількість елементів`, '5')) !== null && _a !== void 0 ? _a : '5');
        const arrayWithRandomNumbers = getArrayWithRandomNumbers(arraySize, minNumber, maxNumber);
        const winArray = [];
        let userAnswer = 0;
        do {
            if (userAnswer > 0) {
                winArray.push(arrayWithRandomNumbers[userAnswer - 1]);
            }
            userAnswer = parseInt((_b = prompt(`Введіть номер елемента від 1 до ${arraySize}\n Щоб завершити гру введіть число <= 0 або >${arraySize}`, '1')) !== null && _b !== void 0 ? _b : '0');
        } while (userAnswer > 0 && userAnswer <= arraySize);
        return calculateTotalWinnings(winArray);
    }
    const totalWinning = playGame();
    let resultMessage = '';
    if (totalWinning > 0)
        resultMessage = `Ви виграли ${totalWinning} грн.`;
    else if (totalWinning < 0)
        resultMessage = `Ви програли ${Math.abs(totalWinning)} грн.`;
    else
        resultMessage = `Ви нічого не виграли.. Спробуйте ще`;
    document.write(resultMessage);
}
