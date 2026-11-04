// Задача 3. Створити окремі функції, які для 4 чисел знаходять:
// 1)суму;
// 2)добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення.

if (confirm('Почати тестування?')) {
  const getSum = (number1: number, number2: number, number3: number, number4: number): number =>
    number1 + number2 + number3 + number4
  const getProduct = (number1: number, number2: number, number3: number, number4: number): number =>
    number1 * number2 * number3 * number4
  const getAverage = (number1: number, number2: number, number3: number, number4: number): number =>
    getSum(number1, number2, number3, number4) / 4
  const getMinValue = (
    number1: number,
    number2: number,
    number3: number,
    number4: number,
  ): number => {
    let min = number1
    if (number2 < min) min = number2
    if (number3 < min) min = number3
    if (number4 < min) min = number4
    return min
  }

  const number1 = parseFloat(prompt(`Введіть перше число`, '5') ?? '5')
  const number2 = parseFloat(prompt(`Введіть друге число`, '5') ?? '5')
  const number3 = parseFloat(prompt(`Введіть третє число`, '5') ?? '5')
  const number4 = parseFloat(prompt(`Введіть четверте число`, '5') ?? '5')
  const sum = getSum(number1, number2, number3, number4)
  const product = getProduct(number1, number2, number3, number4)
  const average = getAverage(number1, number2, number3, number4)
  const min = getMinValue(number1, number2, number3, number4)
  document.write(`
    <p>Число 1: ${number1} </p>
    <p>Число 2: ${number2} </p>
    <p>Число 3: ${number3}</p>
    <p>Число 4: ${number4} </p>
    <p>Сума чисел: ${sum}</p>
    <p>Добуток чисел: ${product.toFixed(2)}</p>
    <p>Середнє арифметичне чисел: ${average.toFixed(2)}</p>
    <p>Мінімальне число: ${min}</p>
    `)
}
