"use strict"

//  Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.

const secondsPerMinute = 60,
      minutesPerHour = 60

const secondsFromDayStart = parseInt(prompt('Введіть кількість секунд, що пройшла від початку доби: ', 24345))

const totalMinutes = Math.floor(secondsFromDayStart / secondsPerMinute)
const hours = Math.floor(totalMinutes / minutesPerHour)
const remainingMinutes = totalMinutes % minutesPerHour

const formattedHours = String(hours).padStart(2, '0')
const formattedMinutes = String(remainingMinutes).padStart(2, '0')

document.write(`
  <p>Кількість секунд, що пройшла від початку доби ${secondsFromDayStart}</p>

  <p>${formattedHours}:${formattedMinutes}</p>
  `)