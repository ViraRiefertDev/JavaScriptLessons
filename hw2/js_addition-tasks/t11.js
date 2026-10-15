"use strict"

// Дано поточну кількість годин, хвилин, секунд (як на годиннику). 
// Визначити 
// 1) яка кількість секунд буде на годиннику через N секунд.
// 2) яка кількість хвилин буде на годиннику через N секунд, X хвилин.

const secondsInMinute = 60,
      minutesInHour = 60

const currentHours = parseInt(prompt('Введіть поточну кількість годин', 12))
const currentMinutes = parseInt(prompt('Введіть поточну кількість хвилин', 38))
const currentSeconds = parseInt(prompt('Введіть поточну кількість сeкунд', 22))

const secondsToAdd = parseInt(prompt('скільки секунд треба додати?: ', 40))
const minutesToAdd = parseInt(prompt('скільки хвилин треба додати?: ', 30))

const totalSeconds = currentSeconds + secondsToAdd
const secondsInFuture = totalSeconds % secondsInMinute

const totalMinutes = Math.floor(totalSeconds / secondsInMinute) + minutesToAdd + currentMinutes
const minutesInFuture = totalMinutes % minutesInHour

document.write(`
  <p>Поточний час: ${currentHours}:${currentMinutes}:${currentSeconds}</p>
  <p>через ${minutesToAdd} хвилин та ${secondsToAdd} секунд на годиннику буде ${minutesInFuture} хвилин та ${secondsInFuture} секунд</p>
  `)

