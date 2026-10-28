"use strict";
//Задача 0. Вивести на екран 8 кнопок з написом “Hello”.
if (confirm('Почати тестування?')) {
    const btnMessage = 'Hello';
    const btnCount = 8;
    let resultHTML = '';
    for (let i = 0; i < btnCount; i++) {
        resultHTML += `<button>${btnMessage}</button></br>`;
    }
    document.write(`
  ${resultHTML}
  `);
}
