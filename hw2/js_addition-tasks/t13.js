"use strict"

// Визначити скільки повних тижнів є у вказаній кількості днів.

const daysInWeek = 7
const daysQuantity = parseInt(prompt('Введіть кількість днів: ', 30))

const weeks = Math.floor(daysQuantity / daysInWeek)

document.write(`
  <p>Повних тижнів: ${weeks}</p>
  `)

