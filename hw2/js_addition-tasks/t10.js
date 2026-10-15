"use strict"

// З клавіатури вводиться кількість монет номіналом 1 копійка. 
// Визначити скільки гривень і копійок є у даній сумі . 
// Наприклад, дано 245 копійок, а вивести 2 грн 45 копійок.

const kopecksInHryvnia  = 100
const coinsQuantity = parseInt(prompt('Введіть кількість монет номіналом 1 копійка', 245))

const hryvniaAmount = Math.floor(coinsQuantity / kopecksInHryvnia )
const remainingKopecks = coinsQuantity % kopecksInHryvnia 

document.write(`
  <p>Кількість монет номіналом 1 копійка ${coinsQuantity}: ${hryvniaAmount} грн ${remainingKopecks} копійок</p>
  `)