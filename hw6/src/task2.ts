// Відобразити трикутник за допомогою символів «о»
// о
// оо
// ооо
// оооо
// ооооо
// оооооо
// ооооооо

if (confirm('Почати тестування?')) {
  let resultHTML = ''
  let currentRow = ''
  const numberOfRows = 7
  for (let i = 1; i <= numberOfRows; i++) {
    currentRow += 'o'
    resultHTML += `${currentRow}<br>`
  }

  document.write(resultHTML)
}
