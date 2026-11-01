"use strict";
// Використовуючи цикли вивести на екран 20 символів «о».
if (confirm('Почати тестування?')) {
    let resultHTML = '';
    for (let i = 0; i < 20; i++) {
        resultHTML += 'o';
    }
    document.write(resultHTML);
}
