// Вивести на екран
// A B C D E
// B C D E F
// C D E F G
// D E F G H
// E F G H I

if (confirm('Почати тестування?')) {
  const startCharCode = 65
  const columnNumber = 5
  const rowNumber = 5
  let resultHTML = ''
  for (let i = 0; i < rowNumber; i++) {
    for (let j = 0; j < columnNumber; j++) {
      const currentCharCode = startCharCode + i + j
      const currentChar = String.fromCharCode(currentCharCode)
      resultHTML += `${currentChar} `
    }
    resultHTML += `<br>`
  }
  document.write(resultHTML)
}
