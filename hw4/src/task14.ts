if (confirm('Почати тестування?')) {
  //Задача 11. Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами.

  let minNumber = parseInt(prompt(`Введіть мінімальне число`, '1') ?? '1')
  const maxNumber = parseInt(prompt(`Введіть максимальне число`, '20') ?? '20')
  const maxOddCount = 5
  let sum = 0
  const step = 2
  minNumber++
  if (minNumber % 2 === 0) {
    minNumber++
  }
  let counter = 0
  for (let i = minNumber; i < maxNumber && counter < maxOddCount; i += step, counter++) {
    sum += i
  }

  document.write(`Сума перших ${counter} непарних чисел=${sum}`)
}
