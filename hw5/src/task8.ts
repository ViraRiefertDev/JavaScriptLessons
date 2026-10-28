// Вивести таблицю
if (confirm('Почати тестування?')) {
  const countOfRows = 3
  const countOfColumns = 3
  let resultHTML = '<div style = "padding:2px;border:2px solid black;display: inline-block;">'
  //Варіант 1
  // let count = 1
  // for (let i = 0; i < countOfRows; i++) {
  //   for (let j = 0; j < countOfColumns; j++) {
  //     resultHTML += `
  //     <div style="font-size: 20px; border: 1px solid black; display: inline-block;">${count}</div>
  //     `
  //     count++
  //   }

  //   resultHTML += '<br>'
  // }
  //Варіант 2
  for (let i = 0; i < countOfRows; i++) {
    for (let j = 0; j < countOfColumns; j++) {
      const cellNumber = i * countOfColumns + j + 1
      resultHTML += `
      <div style="font-size: 20px; border: 1px solid black; display: inline-block;">${cellNumber}</div>
      `
    }

    resultHTML += '<br>'
  }
  resultHTML += '</div>'
  document.write(resultHTML)
}
