"use strict";
// Задача 3. Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів.
// Користувач стріляє вказуючи координати.
// Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.
const startGame = confirm('Пограємо в морський бій?');
if (startGame) {
    const rowCount = 6;
    const columnCount = 6;
    let shipCount = 5;
    let shotsCount = 10;
    const randomNumber = (minNumber, maxNumber) => Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    const generateEmptyGameBoard = (rowCount, columnCount) => Array.from({ length: rowCount }, () => Array.from({ length: columnCount }, () => 0));
    const generateGameBoard = (rowCount, columnCount, shipCount) => {
        const gameBoard = generateEmptyGameBoard(rowCount, columnCount);
        for (let i = 0; i < shipCount; i++) {
            let randomRow;
            let randomColumn;
            do {
                randomRow = randomNumber(0, rowCount - 1);
                randomColumn = randomNumber(0, columnCount - 1);
            } while (gameBoard[randomRow][randomColumn] !== 0);
            gameBoard[randomRow][randomColumn] = 1;
        }
        return gameBoard;
    };
    const gameBoard = generateGameBoard(rowCount, columnCount, shipCount);
    do {
        const userShotAnswer = prompt(`Введіть координати x (від 1 до ${rowCount}) та y (від 1 до ${columnCount}) через пробіл`, '1 1');
        const userShotCoordinate = userShotAnswer === null || userShotAnswer === void 0 ? void 0 : userShotAnswer.split(' ').map((coordinate) => parseInt(coordinate) - 1);
        shotsCount--;
        if (gameBoard[userShotCoordinate[0]][userShotCoordinate[1]]) {
            shipCount--;
            gameBoard[userShotCoordinate[0]][userShotCoordinate[1]] = 0;
            alert(`💥Ви влучили,корабель потоплено☠️!!🏆🏆🏆, залишилось ${shipCount} кораблей та ${shotsCount} пострілів `);
        }
        else {
            alert(`💦Повз! 🐟 Рибки в шоці, корабель у порядку! 😎 Залишилось ${shipCount} кораблей та ${shotsCount} пострілів`);
        }
    } while (shipCount > 0 && shotsCount > 0);
    if (shipCount === 0) {
        alert('💥Ви потопили всі кораблі! Перемога!!🏆🏆🏆');
    }
    else {
        alert(`Ви програли. До побачення!`);
    }
}
