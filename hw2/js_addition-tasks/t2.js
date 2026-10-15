"use strict"

// З клавіатури вводиться розмір заробітної плати та розмір прожиткового мінімуму. 
// Визначити розмір соціальної допомоги (ввжаємо, що заробітна плата є меншою).

const userSalary = parseFloat(prompt('Введіть розмір заробітної плати: ', 12000))
const subsistenceMinimum = parseFloat(prompt('Введіть розмір прожиткового мінімуму', 15000))
const socialBenefitAmount = subsistenceMinimum - userSalary

document.write(`
  <p>Розмір соціальної допомоги: ${socialBenefitAmount}грн</p>
  `)


