"use strict";
var _a;
// 7. Інвестор вклав S тис. грн на 20 років під 20% річних, а потім на 17 років під 27% річних.
//  Визначити за допомогою циклів суму, яку він одержить.
if (confirm('Почати тестування?')) {
    const initialInvestment = parseFloat((_a = prompt(`Введіть кількість грошей (тис.) для вкладу: `, '10')) !== null && _a !== void 0 ? _a : '10');
    const firstPeriodYears = 20;
    const secondPeriodYears = 17;
    const totalPeriodOfYears = firstPeriodYears + secondPeriodYears;
    const firstPeriodInterestRate = 0.2;
    const secondPeriodInterestRate = 0.27;
    let totalAmount = initialInvestment;
    // Варіант 1
    // for (let year = 1; year <= firstPeriodYears; year++) {
    //   totalAmount += totalAmount * firstPeriodInterestRate
    // }
    // for (let year = 1; year <= secondPeriodYears; year++) {
    //   totalAmount += totalAmount * secondPeriodInterestRate
    // }
    //   document.write(
    //   `Вклавши ${initialInvestment} тис грн інвестор отримує після ${firstPeriodYears + secondPeriodYears} років ${totalAmount.toFixed(2)} тис грн`,
    // )
    // Варіант 2
    for (let year = 1; year <= totalPeriodOfYears; year++) {
        const annualInterestRate = year <= firstPeriodYears ? firstPeriodInterestRate : secondPeriodInterestRate;
        totalAmount += totalAmount * annualInterestRate;
    }
    document.write(`Вклавши ${initialInvestment} тис грн інвестор отримує після ${totalPeriodOfYears} років ${totalAmount.toFixed(2)} тис грн`);
}
