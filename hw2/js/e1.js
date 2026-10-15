"use strict"

//  Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці

const firstNumber = parseFloat(prompt('Ввеіть перше дійсне число: ', 1))
const secondNumber = parseFloat(prompt('Введіть друге дійсне число: ', 1))

const sumOfTwoNumbers = firstNumber + secondNumber
const productOfTwoNumbers = firstNumber * secondNumber
const quotientOfTwoNumbers = firstNumber / secondNumber

document.write(`
  <p>Перше введене дійсне число = ${firstNumber.toFixed(2)}</p>
  <p>Друге введене дійсне число = ${secondNumber.toFixed(2)}</p>
  <table border="1">
    <tr>
      <th>Операція</th>
      <th>Результат</th>
    </tr>
    <tr>
      <td>Сума</td>
      <td>${sumOfTwoNumbers.toFixed(2)}</td>
    </tr>
    <tr>
      <td>Добуток</td>
      <td>${productOfTwoNumbers.toFixed(2)}</td>
    </tr>
    <tr>
      <td>Частка</td>
      <td>${quotientOfTwoNumbers.toFixed(2)}</td>
    </tr>
  </table>
  `)
