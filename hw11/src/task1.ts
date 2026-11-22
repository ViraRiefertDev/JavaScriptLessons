// Задача 1. Знайти суми елементів у вказаній області
// (зафарбована область охоплює відповідну половину рядків і стовпців)

if (confirm('Почати тестування?')) {
  const getRandomNumber = (minNumber: number, maxNumber: number): number =>
    Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber

  const getRowNumbers = (columnNumbers: number, minNumber: number, maxNumber: number): number[] =>
    Array.from({ length: columnNumbers }, () => getRandomNumber(minNumber, maxNumber))

  const generate2DArray = (
    rowNumbers: number,
    columnNumbers: number,
    minNumber: number,
    maxNumber: number,
  ): number[][] => {
    return Array.from({ length: rowNumbers }, () =>
      getRowNumbers(columnNumbers, minNumber, maxNumber),
    )
  }
  const getString2DArray = (arr: number[][]): string => {
    let resultHtml = '<table border="1" style="border-collapse: collapse;">'

    for (const row of arr) {
      resultHtml += '<tr>'

      for (const column of row) {
        resultHtml += `<td style="padding: 5px; text-align: center;">${column}</td>`
      }

      resultHtml += '</tr>'
    }

    resultHtml += '</table>'

    return resultHtml
  }
  const getSumInRange = (
    arr: number[][],
    rowStart: number,
    rowEnd: number,
    columnStart: number,
    columnEnd: number,
    columnStep: number = 1,
    rowStep: number = 1,
  ): number => {
    let sum = 0
    for (let i = rowStart; i < rowEnd; i += rowStep) {
      for (let j = columnStart; j < columnEnd; j += columnStep) {
        sum += arr[i][j]
      }
    }
    return sum
  }
  const columnNumbers = 4
  const rowNumbers = 4
  const minNumber = 1
  const maxNumber = 10

  const halfRowIndex = Math.floor(rowNumbers / 2)
  const halfColumnIndex = Math.floor(columnNumbers / 2)

  const arr = generate2DArray(rowNumbers, columnNumbers, minNumber, maxNumber)

  const stringArr = getString2DArray(arr)
  //! 1) номери рядків від 0 до половини, стовпці від 0 до половини
  let sum = getSumInRange(arr, 0, halfRowIndex, 0, halfColumnIndex)
  document.write(`
    ${stringArr}
    <p>Сума елементів(номери рядків від 0 до половини, стовпці від 0 до половини) = ${sum} </p>
    `)
  //! 2) номери рядків від 0 до половини, стовпці від половини до кінця
  sum = getSumInRange(arr, 0, halfRowIndex, halfColumnIndex, columnNumbers)

  document.write(`
    <p>Сума елементів(номери рядків від 0 до половини, стовпці від половини до кінця) = ${sum} </p>
    `)
  //! 3) номери рядків (номери рядків від половини до кінця, стовпці від 0 до половини)
  sum = getSumInRange(arr, halfRowIndex, rowNumbers, 0, halfColumnIndex)

  document.write(`
    <p>Сума елементів(номери рядків від половини до кінця, стовпці від 0 до половини) = ${sum} </p>
    `)
  //! 4) номери рядків від половини до кінця , стовпці від половини до кінця
  sum = getSumInRange(arr, halfRowIndex, rowNumbers, halfColumnIndex, columnNumbers)

  document.write(`
    <p>Сума елементів номери рядків від половини до кінця , стовпці від половини до кінця) = ${sum} </p>
    `)
  //! 5) Суму парних рядків
  sum = getSumInRange(arr, 0, rowNumbers, 0, columnNumbers, 1, 2)

  document.write(`
    <p>Сума парних рядків = ${sum} </p>
    `)
  //! 6) Суму непарних стовпців
  sum = getSumInRange(arr, 0, rowNumbers, 1, columnNumbers, 2)

  document.write(`
    <p>Суму непарних стовпців = ${sum} </p>
    `)
  //! 7) У парних рядках – непарні стовпці, у непарних – парні.
  sum =
    getSumInRange(arr, 0, rowNumbers, 1, columnNumbers, 2, 2) +
    getSumInRange(arr, 1, rowNumbers, 0, columnNumbers, 2, 2)

  document.write(`
    <p>У парних рядках – непарні стовпці, у непарних – парні = ${sum} </p>
    `)
}
