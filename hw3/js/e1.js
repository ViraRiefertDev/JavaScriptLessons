'use strict'

//З клавіатури вводяться імена двох дітей та кількість у них цукерок.
// Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою,
// або вивести, що кількість однакова.

const child1Name = prompt('Введіть ім’я першої дитини: ', 'Tom')
const child1CandiesQuantity = parseInt(prompt('Введіть кількість цукерок у першої дитини: ', 12))
const child2Name = prompt('Введіть ім’я другої дитини: ', 'Sam')
const child2CandiesQuantity = parseInt(prompt('Введіть кількість цукерок у другої дитини: ', 8))

let resultMessage
if (child1CandiesQuantity > child2CandiesQuantity) {
  resultMessage = child1Name
} else if (child2CandiesQuantity > child1CandiesQuantity) {
  resultMessage = child2Name
} else {
  resultMessage = 'Кількість цукерок однакова'
}

document.write(`
  <p>${resultMessage}</p>
  `)
