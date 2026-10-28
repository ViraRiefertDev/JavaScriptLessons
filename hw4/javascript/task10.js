"use strict";
var _a;
if (confirm('Почати тестування?')) {
    // Вивести на екран N абзаців (N вводиться користувачем) за зразком
    const N = parseInt((_a = prompt(`Введіть кількість абзаців: `, '4')) !== null && _a !== void 0 ? _a : '4');
    let resultHTML = '';
    for (let i = 1; i <= N; i++) {
        resultHTML += `<h1>Заголовок ${i}</h1>`;
        for (let j = 1; j <= i; j++) {
            resultHTML += `<p>Розділ ${i}, параграф ${j}</p>`;
        }
        resultHTML += `<hr>`;
    }
    document.write(resultHTML);
}
