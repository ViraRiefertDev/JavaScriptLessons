// Відобразити трикутник за допомогою символів «о»

if (confirm('Почати тестування?')) {
  let resultHTML = '<div style="display:inline-block">'
  const numberOfRows = 12
  for (let i = numberOfRows; i >= 1; i--) {
    const currentRow = 'o'.repeat(i)
    resultHTML += `<span style=" font-size: 20px; text-align:center; display: block">${currentRow}</span>`
  }
  resultHTML += '</div>'
  document.write(resultHTML)
}
