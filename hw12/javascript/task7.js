"use strict";
//Сформувати двовимірний масив (4*8) з номерами днів (описати окремий тип для днів).
// Заповнити його випадковим чином. Підрахувати для кожного рядка кількість неділь.
if (confirm('Почати тестування?')) {
    const columnCount = 8;
    const rowCount = 4;
    function transform2DArrayToString(arr) {
        return arr.map((row) => row.join(' ')).join('<br>');
    }
    function generateRandomDayNumber() {
        const minNumber = 1;
        const maxNumber = 7;
        return (Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber);
    }
    function generateRandomDay2DArray(rowCount, columnCount) {
        return Array.from({ length: rowCount }, () => Array.from({ length: columnCount }, () => generateRandomDayNumber()));
    }
    function countDayOccurrencesPerRow(arr, searchDay) {
        return arr.map((row) => row.reduce((sum, day) => (day === searchDay ? sum + 1 : sum), 0));
    }
    const dayNumber = 7;
    const randomDaysArray = generateRandomDay2DArray(rowCount, columnCount);
    const countOfSundaysPerRow = countDayOccurrencesPerRow(randomDaysArray, dayNumber);
    document.write(`
      <p>${transform2DArrayToString(randomDaysArray)}</p>
      <p>Для кожного рядка кількість неділь:${countOfSundaysPerRow}</p>
    `);
}
