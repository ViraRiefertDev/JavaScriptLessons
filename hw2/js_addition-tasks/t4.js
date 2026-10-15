"use strict"

// З клавіатури вводиться вік дитини. 
// Вивести на екран через скільки років вона буде відвідувати садочок, піде у школу, 
// закінчить школу, вступить і закінчить 

const kindergartenStartAge = 3,
      schoolStartAge = 7,
      uniStartAge = 19,
      uniEndAge = 23


const childAge = parseInt(prompt('Введіть вік дитини'))

const ageUntilKindergarten = kindergartenStartAge - childAge
const ageUntilSchool = schoolStartAge - childAge
const ageUntilUni = uniStartAge - childAge
const ageUntilGraduation = uniEndAge - childAge


document.write(`
  <p>Дитина буде відвідувати садочок через ${ageUntilKindergarten} роки/ів</p>
  <p>Дитина піде у школу через ${ageUntilSchool} роки/ів</p>
  <p>Дитина закінчить школу і вступить до університету через ${ageUntilUni} роки/ів</p>
  <p>Дитина закінчить університет через ${ageUntilGraduation} роки/ів</p>
  `)

