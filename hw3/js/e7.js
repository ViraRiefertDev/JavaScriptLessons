'use strict'

//З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься

const monthNumber = parseInt(prompt('Введіть номер місяця: ', 4))

let result
switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    result = 'Зима'
    break
  case 3:
  case 4:
  case 5:
    result = 'Весна'
    break
  case 6:
  case 7:
  case 8:
    result = 'Літо'
    break
  case 9:
  case 10:
  case 11:
    result = 'Осінь'
    break
  default:
    result = 'Невірний номер місяця'
}

document.write(`
  <p>${result}</p>
  `)
