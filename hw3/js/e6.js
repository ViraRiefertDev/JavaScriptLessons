'use strict'

//З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

const numberOfWeek = parseInt(prompt('Введіть номер тижня: ', 4))

let result
switch (numberOfWeek) {
  case 1:
    result = 'Понеділок'
    break
  case 2:
    result = 'Вівторок'
    break
  case 3:
    result = 'Середа'
    break
  case 4:
    result = 'Четвер'
    break
  case 5:
    result = "П'ятниця"
    break
  case 6:
    result = 'Субота'
    break
  case 7:
    result = 'Неділя'
    break

  default:
    result = 'Невірний номер тижня'
}

document.write(`
  <p>${result}</p>
  `)
