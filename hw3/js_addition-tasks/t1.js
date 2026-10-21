'use strict'

//  На екран виводиться меню:
// 1. Веселий
// 2. Сумний
// 3. Обурений
// Користувач вводить номер пункту меню і на екрані з’являється відповідне зображення смайла.

const userChoice = parseInt(prompt('Виберіть від 1 до 3\n1. Веселий\n2. Сумний\n3. Обурений', 1))

let result
switch (userChoice) {
  case 1:
    result = '😁'
    break
  case 2:
    result = '😢'
    break
  case 3:
    result = '😡'
    break
  default:
    result = 'Невірне число. Треба було ввести число від 1 до 3'
}

document.write(`
  <p style="font-size: 32px;">${result}</p>
  `)
