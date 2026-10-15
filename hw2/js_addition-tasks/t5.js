"use strict"

// Визначити, яку платню одержить на фірмі сумісник за виконану роботу, 
// якщо йому нараховано S грн., а податок становить 20%.

const taxRate = 0.2
const grossSalary = parseFloat(prompt('Введіть суму нарахованих грошей: ', 12000))

const taxAmount = grossSalary * taxRate
const netSalary = grossSalary - taxAmount

document.write(`
  <p>Сумісник одержить ${netSalary.toFixed(2)} грн</p>
  `)

