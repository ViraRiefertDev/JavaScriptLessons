"use strict";
//Задача 5. Дано масив імен.
// Застосовуючи відповідне сортування та бінарний пошук визначити,
// чи є у масиві ім’я «Olga» і під яким індексом.
if (confirm('Почати тестування?')) {
    function generateResultMessage(resultIndex) {
        return resultIndex !== -1
            ? `Елемент є під індексом ${resultIndex} у відсортованому масиві`
            : 'Елемента немає';
    }
    function sortStringArray(arr) {
        return [...arr].sort();
    }
    function findNameInArray(sortedArray, searchEl) {
        let startIndex = 0;
        let endIndex = sortedArray.length - 1;
        while (startIndex <= endIndex) {
            const middleIndex = Math.floor((startIndex + endIndex) / 2);
            if (sortedArray[middleIndex] === searchEl)
                return middleIndex;
            if (sortedArray[middleIndex] < searchEl)
                startIndex = middleIndex + 1;
            else
                endIndex = middleIndex - 1;
        }
        return -1;
    }
    const searchName = 'Olga';
    const namesWithOlga = [
        'Anna',
        'Max',
        'Sofia',
        'Daniel',
        'Olga',
        'Emma',
        'Alex',
        'Maria',
        'David',
        'Julia',
    ];
    const namesWithoutOlga = [
        'Kate',
        'Tom',
        'Lisa',
        'Michael',
        'Nina',
        'Laura',
        'Peter',
        'Helen',
        'Mark',
        'Alice',
    ];
    let sortedArray = sortStringArray(namesWithOlga);
    let resultIndex = findNameInArray(sortedArray, searchName);
    document.write(`
    <p>Відсортований масив: ${sortedArray}</p>
    <p>Чи є елемент з ім'ям ${searchName}?: ${generateResultMessage(resultIndex)}</p>
    `);
    sortedArray = sortStringArray(namesWithoutOlga);
    resultIndex = findNameInArray(sortedArray, searchName);
    document.write(`
    <p>Відсортований масив:${sortedArray}</p>
    <p>Чи є елемент з ім'ям ${searchName}?: ${generateResultMessage(resultIndex)}</p>
    `);
}
