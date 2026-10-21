'use strict'

//З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

const MIN_AGE = 0
const MAX_AGE = 120
const MAX_CHILD_AGE = 6
const MAX_SCHOOL_CHILD_AGE = 18
const MAX_STUDENT_AGE = 25
const MAX_WORKING_AGE = 65

const userAge = parseInt(prompt('Введіть вік людини: ', 18))

let result

if (Number.isNaN(userAge) || userAge < MIN_AGE || userAge > MAX_AGE) result = 'Невірний вік людини'
else if (userAge <= MAX_CHILD_AGE) result = 'дитина у садочку'
else if (userAge <= MAX_SCHOOL_CHILD_AGE) result = 'школяр'
else if (userAge <= MAX_STUDENT_AGE) result = 'студент'
else if (userAge <= MAX_WORKING_AGE) result = 'працівник'
else result = 'пенсіонер'

document.write(`
  <p>${result}</p>
  `)
