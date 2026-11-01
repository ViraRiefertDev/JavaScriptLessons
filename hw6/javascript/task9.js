"use strict";
// Вивести на екран
// 1 1
// 2 1 2
// 3 1 2 3
// 4 1 2 3 4
// …
// i 1 2 3 ..i
// 23 1 2 3 .. 22 23
if (confirm('Почати тестування?')) {
    const maxNumber = 23;
    let resultHtml = '';
    let currentLine = '';
    for (let i = 1; i <= maxNumber; i++) {
        currentLine += `${i} `;
        resultHtml += `<p>${i} ${currentLine}</p>`;
    }
    document.write(resultHtml);
}
