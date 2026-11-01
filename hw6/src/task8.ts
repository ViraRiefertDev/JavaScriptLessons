//Вивести на екран послідовність символів
// а о а о а о а о а о …
// Всього символів 82.
if (confirm('Почати тестування?')) {
  const countOfChars = 82
  let result = ''
  // Варіант 1
  for (let i = 0; i < countOfChars; i++) {
    result += i % 2 === 1 ? 'o ' : 'a '
  }
  // Варіант 2
  // result = 'a o '.repeat(countOfChars / 2)
  document.write(`
    <p>${result}</p>
    `)
}
