// 14. Каса. Користувачу повідомляють суму, яку йому треба сплатити.
// Користувач поступово вводить суму грошей до тих пір, поки суми не буде достатньо для оплати товарів
// (кожного разу користувачу повідомляють, яку ще суму потрібно ввести).
if (confirm('Почати тестування?')) {
  const kopeksInGryvna = 100
  let changeMessage = ''
  let remainingAmountInKopeks = 12000 * kopeksInGryvna
  do {
    const paidMoney = parseFloat(
      prompt(
        `Вам треба ще сплатити ${(remainingAmountInKopeks / kopeksInGryvna).toFixed(2)} грн. Введіть суму грошей`,
        '1000',
      ) ?? '1000',
    )
    remainingAmountInKopeks -= Math.round(paidMoney * kopeksInGryvna)
  } while (remainingAmountInKopeks > 0)

  if (remainingAmountInKopeks < 0) {
    changeMessage = ` Ось ваша здача ${(-remainingAmountInKopeks / kopeksInGryvna).toFixed(2)} грн`
  }
  alert(`Вітаю, ви сплатили всю суму. ${changeMessage}`)
}
