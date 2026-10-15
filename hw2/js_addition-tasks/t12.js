"use strict"

// З клавіатури вводиться кількість монет номіналом 2 копійки (5коп, 25коп, 50 коп). 
// Визначити скільки гривень і копійок є у даній сумі.

const kopecksInHryvnia = 100
const kopecks2 = 2
const kopecks5 = 5
const kopecks25 = 25
const kopecks50 = 50

const kopecks2Count = parseInt(prompt('Введіть кількість монет номіналом 2 копійки: ', 10))
const kopecks5Count = parseInt(prompt('Введіть кількість монет номіналом 5 копійки: ', 20))
const kopecks25Count = parseInt(prompt('Введіть кількість монет номіналом 25 копійки: ', 80))
const kopecks50Count = parseInt(prompt('Введіть кількість монет номіналом 50 копійки: ', 30))

const totalKopecks = 
  kopecks2Count * kopecks2 + 
  kopecks5Count * kopecks5 + 
  kopecks25Count * kopecks25 + 
  kopecks50Count * kopecks50 
const hryvnia = Math.floor(totalKopecks / kopecksInHryvnia)
const kopecks = totalKopecks % kopecksInHryvnia

document.write(`
  <p>У даній сумі: ${hryvnia}.${String(kopecks).padStart(2, '0')}грн</p>
  `)

