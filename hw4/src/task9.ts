// Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком
if (confirm('Почати тестування?')) {
  const countOfRows = 3
  const countOfColumns = 3
  const countOfTables = 3
  let count = 1
  let resultHTML = '<div style = "display:flex; gap: 30px">'

  for (let k = 0; k < countOfTables; k++) {
    resultHTML += '<div style = "padding:2px;border:2px solid black;display: inline-block;">'
    for (let i = 0; i < countOfRows; i++) {
      for (let j = 0; j < countOfColumns; j++) {
        resultHTML += `
      <div style="font-size: 20px; border: 1px solid black; display: inline-block;">${count}</div>
      `
        count++
      }

      resultHTML += '<br>'
    }

    resultHTML += '</div>'
  }
  resultHTML += '</div>'
  document.write(resultHTML)
}
