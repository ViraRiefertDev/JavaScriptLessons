"use strict"

//  Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.

const yearOfBirth = parseInt(prompt('Введіть рік народження: ', 1992))
const currentYear = new Date().getFullYear()

const age = currentYear - yearOfBirth  

document.write(`
  <p>Рік народження: ${yearOfBirth}</p>
  <p>Поточний рік: ${currentYear}</p>
  <p>Кількість років: ${age}</p>
  `)
