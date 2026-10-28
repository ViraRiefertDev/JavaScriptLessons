if (confirm('Почати тестування?')) {
  //Задача 10. Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами.

  let minNumber = parseInt(prompt(`Введіть мінімальне число`, '1') ?? '1')
  const maxNumber = parseInt(prompt(`Введіть максимальне число`, '20') ?? '20')

  let sum = 0
  const step = 2
  minNumber++
  if (minNumber % 2 === 0) {
    minNumber++
  }
  for (let i = minNumber; i < maxNumber; i += step) {
    sum += i
  }

  document.write(`Сума всіх непарних чисел=${sum}`)
}
