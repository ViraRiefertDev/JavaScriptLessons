"use strict";
// Задача 4. Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
// •	починаються на букву «А» (для отримання першої літери можна також звернутися до номера авто як string ніби
//    як до масиву за номером 0 - autoNum[0]-перша літера);
// •	перша і остання літери співпадають;
// •	складаються з більше ніш 5 символів;
if (confirm('Почати тестування?')) {
    const isStartingWithLetter = (plateNumber, letter) => plateNumber[0] === letter;
    const hasMatchingFirstAndLastChar = (plateNumber) => plateNumber[0] === plateNumber[plateNumber.length - 1];
    const isLongerThan = (plateNumber, minLengthOfPlateNumber) => plateNumber.length > minLengthOfPlateNumber;
    function countPlatesByCondition(autoPlatesArray, condition) {
        let autoPlatesCount = 0;
        for (let i = 0; i < autoPlatesArray.length; i++) {
            if (condition(autoPlatesArray[i]))
                autoPlatesCount++;
        }
        return autoPlatesCount;
    }
    function showAutoCountStatistics(autoPlatesArray, firstLetter, minLengthOfPlateNumber) {
        const countOfPlatesStartingWithLetter = countPlatesByCondition(autoPlatesArray, (plateNumber) => isStartingWithLetter(plateNumber, firstLetter));
        const countOfPlatesWithMatchingFirstAndLastChar = countPlatesByCondition(autoPlatesArray, hasMatchingFirstAndLastChar);
        const countOfPlatesLongerThanLimit = countPlatesByCondition(autoPlatesArray, (plateNumber) => isLongerThan(plateNumber, minLengthOfPlateNumber));
        document.write(`
      <p>Кількість номерів, які починаються на букву ${firstLetter}: ${countOfPlatesStartingWithLetter}</p>
      <p>Кількість номерів, у яких перша і остання літери співпадають: ${countOfPlatesWithMatchingFirstAndLastChar}</p>
      <p>Кількість номерів, які більше ніж ${minLengthOfPlateNumber} символів: ${countOfPlatesLongerThanLimit}</p>
      <hr>
      `);
    }
    // 1. Змішані номери — перевірка всіх трьох умов
    const autoPlates1 = ['AB1234BA', 'BC1234CB', 'AA123', 'CA12AC', 'A123B', 'DE123456', 'A12'];
    // 2. Жоден номер не відповідає жодній умові
    const autoPlates2 = ['BC123', 'DE456', 'FG789', 'HI012', 'JK345'];
    // 3. Усі номери відповідають усім трьом умовам
    const autoPlates3 = ['A12345A', 'A98765A', 'A11111A', 'A54321A', 'A77777A'];
    showAutoCountStatistics(autoPlates1, 'A', 5);
    showAutoCountStatistics(autoPlates2, 'A', 5);
    showAutoCountStatistics(autoPlates3, 'A', 5);
}
