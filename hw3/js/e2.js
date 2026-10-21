'use strict'

//З клавіатури вводиться ціна товару і кількість грошей.
// Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші,
// то пропонуємо купити лотерею за 4 грн.

const productPrice = parseFloat(prompt('Введіть ціну товару: ', 12.99))
const moneyAmount = parseFloat(prompt('Кількість грошей: ', 20.0))

const remainingMoney = moneyAmount - productPrice

let resultMessage
if (remainingMoney < 0) {
  resultMessage = 'В покупці відмовлено'
} else {
  resultMessage = 'Покупка пройшла успішно. '
  if (remainingMoney >= 4) {
    resultMessage += 'Пропонуємо купити лотерею за 4 гривні'
  }
}

document.write(`
  <p>${resultMessage}</p>
  `)
