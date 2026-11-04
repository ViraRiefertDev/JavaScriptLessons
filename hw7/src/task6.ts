// Задача 6. Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців
//(таблиця заповнюється заданим фіксованим повідомленням).

if (confirm('Почати тестування?')) {
  const MESSAGE = 'Hello world!!'
  const rowsNumber = parseInt(prompt(`Введіть кількість рядків: `, '5') ?? '5')
  const columnsNumber = parseInt(prompt(`Введіть кількість стовбців: `, '5') ?? '5')

  const createTableWithMessage = (
    message: string,
    rowsNumber: number,
    columnsNumber: number,
  ): string => {
    let tableHTML = '<table style="border-collapse: collapse;">'
    for (let i = 0; i < rowsNumber; i++) {
      tableHTML += '<tr>'
      for (let j = 0; j < columnsNumber; j++) {
        tableHTML += `<td style="border: 1px solid black; padding: 8px;">${message}</td>`
      }
      tableHTML += '</tr>'
    }
    tableHTML += '</table>'
    return tableHTML
  }

  const tableWithMessage = createTableWithMessage(MESSAGE, rowsNumber, columnsNumber)
  document.write(tableWithMessage)
}
