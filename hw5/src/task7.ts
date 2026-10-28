if (confirm('Почати тестування?')) {
  //. Вивести таблицю з 3 рядків і 7 стовпців

  const countOfRows = 3
  const countOfColumns = 7
  let resultHTML = '<div style = "padding:2px;border:2px solid black;display: inline-block;">'
  for (let i = 1; i <= countOfRows; i++) {
    for (let j = 1; j <= countOfColumns; j++) {
      resultHTML += `
      <div style="font-size: 20px; border: 1px solid black; display: inline-block;">${j}</div>
      `
    }

    resultHTML += '<br>'
  }
  resultHTML += '</div>'
  document.write(resultHTML)
}
