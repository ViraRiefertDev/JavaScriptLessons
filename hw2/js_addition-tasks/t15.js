"use strict"

// З клавіатури вводиться кількість місяців, які пройшли від деякого моменту часу. 
// Вивести повну кількість років і місяців. Наприклад, дано 28 місяців, а вивести 2 роки і 4 місяці.

const monthInYear = 12
const monthQuantity = parseInt(prompt('Введіть кількість місяців',28))
const years = Math.floor(monthQuantity / monthInYear)
const month = monthQuantity % monthInYear

document.write(`
  <p>З деякого моменту часу пройшло ${years} роки/ів і ${month} місяці/ів</p>
  `)
