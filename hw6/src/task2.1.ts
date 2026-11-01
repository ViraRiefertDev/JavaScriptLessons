//Відобразити трикутник за допомогою символів «о»

if (confirm('Почати тестування?')) {
  let resultHTML = '<div style="display:inline-block">'
  let currentRow = ''
  const numberOfRows = 7
  for (let i = 0; i < numberOfRows; i++) {
    currentRow += 'o'
    resultHTML += `<span style=" font-size: 20px; text-align:center; display: block">${currentRow}</span>`
  }
  resultHTML += '</div>'
  document.write(resultHTML)
}
