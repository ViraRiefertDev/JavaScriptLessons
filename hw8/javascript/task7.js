"use strict";
// Задача 7. Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
// за весь рік;
// у першій половині року;
// у другій половині року;
// за літо;
// за ІІ квартал;
// за парні місяці (з парними номерами);
// за місяці, які є початковими у сезоні (весна, літо, осінь, зима).
if (confirm('Почати тестування?')) {
    function getPaymentsSum(payments, firstMonth, lastMonth, step) {
        let sum = 0;
        const firstMonthIndex = firstMonth - 1;
        for (let i = firstMonthIndex; i < lastMonth; i += step) {
            sum += payments[i];
        }
        return sum;
    }
    function showStatistics(payments) {
        const totalYearPaymentsSum = getPaymentsSum(payments, 1, 12, 1);
        const firstHalfYearPaymentsSum = getPaymentsSum(payments, 1, 6, 1);
        const secondHalfYearPaymentsSum = getPaymentsSum(payments, 7, 12, 1);
        const summerPayments = getPaymentsSum(payments, 6, 8, 1);
        const secondQuarterPaymentsSum = getPaymentsSum(payments, 4, 6, 1);
        const evenMonthsPaymentsSum = getPaymentsSum(payments, 2, 12, 2);
        const seasonStartMonthsPaymentsSum = getPaymentsSum(payments, 3, 12, 3);
        document.write(`
    <p>Загальна сума платежів за весь рік: ${totalYearPaymentsSum}</p>
    <p>Сума платежів за першу половину року: ${firstHalfYearPaymentsSum}</p>
    <p>Сума платежів за другу половину року: ${secondHalfYearPaymentsSum}</p>
    <p>Сума платежів за літо: ${summerPayments}</p>
    <p>Сума платежів за II квартал: ${secondQuarterPaymentsSum}</p>
    <p>Сума платежів за парні місяці: ${evenMonthsPaymentsSum}</p>
    <p>Сума платежів за перші місяці сезонів: ${seasonStartMonthsPaymentsSum}</p>
    <hr>
  `);
    }
    const payments = [1200, 850, 1500, 2300, 950, 1800, 2100, 1750, 1300, 2600, 1100, 3000];
    showStatistics(payments);
}
