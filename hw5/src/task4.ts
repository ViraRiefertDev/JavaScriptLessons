// Задача 1. Вивести з використанням циклів маркований список з випадковими числами (1-100).
// Кількість випадкових чисел вводиться користувачем.

if (confirm('Почати тестування?')) {
  const MIN_NUMBER = 1
  const MAX_NUMBER = 100
  const countOfRandomNumber = parseInt(prompt(`Введіть кількість рандомних чисел`, '8') ?? '5')
  let randomNumber = 0
  let resultHTML = '<ul>'
  for (let i = 0; i < countOfRandomNumber; i++) {
    randomNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER
    resultHTML += `<li>${randomNumber}</li>`
  }
  resultHTML += '</ul>'

  document.write(`
    ${resultHTML}
    `)
}
