"use strict"

// Скласти програму для розв’язування задачі: йде N-а секунда доби, 
// визначити скільки повних годин і повних хвилин пройшло до цього моменту.

const secondsInMinute = 60,
      minutesInHour = 60

const currentDaySeconds = parseInt(prompt('Введіть актуальну секунду доби: ', 43214))

const currentDayMinutes = Math.floor(currentDaySeconds / secondsInMinute)

const wholeHours = Math.floor(currentDayMinutes / minutesInHour)
const wholeMinutes = currentDayMinutes % minutesInHour

document.write(`
  <p>Повних годин: ${wholeHours}</p>
  <p>Повних хвилин: ${wholeMinutes}</p>
  `)
