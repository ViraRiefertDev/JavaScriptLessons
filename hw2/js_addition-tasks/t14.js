"use strict"

// З клавіатури вводиться номер дня тижня (від 1 до 7). Визначити який буде день тижня через N днів

const daysInWeek = 7
const dayOfWeek = parseInt(prompt('Введіть номер дня тижня: ', 4))
const daysToAdd = parseInt(prompt('Введіть кількість днів, які треба додати: ', 10))

const resultDayOfWeek = (dayOfWeek-1 + daysToAdd) % daysInWeek + 1 

document.write(`
  <p>Якщо сьогодні ${dayOfWeek} день тижня, то через ${daysToAdd} дня/ів буде ${resultDayOfWeek} день тижня</p>
  `)
