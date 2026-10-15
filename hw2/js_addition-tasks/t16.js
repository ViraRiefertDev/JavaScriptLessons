"use strict"

// З клавіатури вводиться номер місяця. Визначити, який буде місяць через вказану кількість N місяців.

const monthsInYear = 12

const monthNumber = parseInt(prompt('Введіть номер місяця', 12))
const monthsToAdd = parseInt(prompt('Введіть кількість місяців: ', 12))

const monthInFuture = (monthNumber - 1 + monthsToAdd) % monthsInYear + 1

document.write(`
  <p>Якщо зараз ${monthNumber} місяць, то через ${monthsToAdd} місяця/ів буде ${monthInFuture} місяць</p>
  `)