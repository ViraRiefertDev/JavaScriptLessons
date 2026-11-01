"use strict";
// Відобразити трикутник за допомогою символів «о»
if (confirm('Почати тестування?')) {
    let resultHTML = '';
    const numberOfRows = 12;
    for (let i = numberOfRows; i >= 1; i--) {
        const currentRow = 'o'.repeat(i);
        resultHTML += `${currentRow}<br>`;
    }
    document.write(resultHTML);
}
