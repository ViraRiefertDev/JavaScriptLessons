'use strict'

//З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль).
// Вивести на екран назву транспортного засобу, яким він може керувати.

const driverCategory = prompt('Введіть назву категорії водія (A, B або C): ', 'A')?.toUpperCase()

let result

switch (driverCategory) {
  case 'A':
    result = 'мотоцикл'
    break
  case 'B':
    result = 'легковий автомобіль'
    break
  case 'C':
    result = 'вантажний автомобіль'
    break

  default:
    result = 'Невірна назва категорії водія'
}

document.write(`
  <p>${result}</p>
  `)
