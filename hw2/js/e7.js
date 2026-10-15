"use strict"

// Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).

const minMonthNumber = 1,
      maxMonthNumber = 12,
      minDayNumber = 0,
      maxDayNumber = 6

const randomMonthNumber = Math.floor(Math.random() * (maxMonthNumber - minMonthNumber + 1)) + minMonthNumber
const randomDayNumber = Math.floor(Math.random() * (maxDayNumber - minDayNumber + 1)) + minDayNumber

const sum = randomMonthNumber + randomDayNumber

document.write(`
  <p>Випадковий номер місяця: ${randomMonthNumber}</p>
  <p>Випадковий номер дня: ${randomDayNumber}</p>
  <p>Сума випадкового номера місяця та випадкового номера дня ${sum}.</p>
  `)