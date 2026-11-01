"use strict";
// 11. Вивести на екран усі двоцифрові числа, у яких перша цифра є більшою або рівною за другу.
if (confirm('Почати тестування?')) {
    // // 1 Варіант
    // const minNumber = 10
    // const maxNumber = 99
    // let resultHtml = `<p>`
    // for (let i = minNumber; i <= maxNumber; i++) {
    //   const firstDigit = Math.floor(i / 10)
    //   const secondDigit = i % 10
    //   if (firstDigit >= secondDigit) {
    //     resultHtml += `${i}`
    //   }
    // }
    // resultHtml += `</p>`
    // document.write(resultHtml)
    // 2 Варіант
    let resultHtml = `<p>`;
    for (let i = 1; i <= 9; i++) {
        for (let j = 0; j <= i; j++) {
            resultHtml += `${i}${j} `;
        }
    }
    resultHtml += `</p>`;
    document.write(resultHtml);
}
