// З клавіатури вводитяться числа поки не буде введено 0. Знайти суму чисел.
if (confirm('Почати тестування?')) {
  let userNumber = 0
  let sum = 0
  do {
    userNumber = parseFloat(
      prompt(`Введіть число, \nякщо введете 0 я порахую сумму ведених вами чисел`, '10') ?? '10',
    )
    sum += userNumber
  } while (userNumber !== 0)
  document.write(`Сума чисел  = ${sum}`)
}
