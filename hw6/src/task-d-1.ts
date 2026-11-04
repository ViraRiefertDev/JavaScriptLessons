// З клавіатури вводяться числа до тих пір, поки послідовність є зростаючою або спадною.

if (confirm('Почати тестування?')) {
  let previousNumber = parseFloat(prompt(`Введіть число`, '5') ?? '5')
  let currentNumber = parseFloat(prompt(`Введіть число`, '5') ?? '5')
  const direction = Math.sign(previousNumber - currentNumber)
  let newDirection = direction
  while (direction !== 0 && newDirection === direction) {
    previousNumber = currentNumber
    currentNumber = parseFloat(prompt(`Введіть число`, '5') ?? '5')
    newDirection = Math.sign(previousNumber - currentNumber)
  }
}
