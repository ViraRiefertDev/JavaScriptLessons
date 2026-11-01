"use strict";
//  Побудувати ялинку
if (confirm('Почати тестування?')) {
    const treeCount = 3;
    const rowsPerTree = 5;
    const countOfTotalRows = treeCount * rowsPerTree;
    let resultHTML = '';
    for (let i = 1; i <= countOfTotalRows; i++) {
        const currentRow = 'o'.repeat(((i - 1) % rowsPerTree) + 1);
        resultHTML += `${currentRow}<br>`;
    }
    document.write(resultHTML);
}
