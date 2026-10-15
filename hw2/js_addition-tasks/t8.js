"use strict"

// Розробити програму (не використовувати if), яка за номером року Y визначає номер століття C 
// (врахувати, що початком XX століття був 1901, а не 1900 рік). 

const yearsInCentury = 100
const year = parseInt(prompt('Введіть рік: ', 1901))

const century = Math.ceil(year / yearsInCentury)

document.write(`
  <p>Рік: ${year} Століття ${century}</p>
  `)
