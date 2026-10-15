"use strict"

// Скласти алгоритм, який обчислює цілу і дробову частину даного числа х. 
// Наприклад: число 23,56  => ціла: 23, дробова: 0,56.

const number = parseFloat(prompt('Введіть дійсне число', 12.43))

const integerPart = Math.trunc(number)
const fractionalPart = number - integerPart

document.write(`
  <p>Число: ${number}</p>
  <p>Ціла: ${integerPart}</p>
  <p>Дробова: ${fractionalPart.toFixed(2)}</p>
  `)
