'use strict'

//  Комп’ютер випадковим чином вибирає початок і кінець проміжку
// (проміжок повинен знаходитися в межах від 1 до 100).
// Користувач вводить число і виграє, якщо число знаходиться у цьому проміжку,
// або розташоване від нього (від лівого або правого краю) не більше ніж на 10.

const RANGE_START = 1
const RANGE_END = 100
const TOLERANCE = 10
// от RANGE_START до (RANGE_END-1)
const randomRangeStart = Math.floor(Math.random() * (RANGE_END - RANGE_START)) + RANGE_START
// от (randomRangeStart + 1) до RANGE_END
const randomRangeEnd =
  Math.floor(Math.random() * (RANGE_END - randomRangeStart)) + randomRangeStart + 1

const randomRangeStartWithTolerance = randomRangeStart - TOLERANCE
const randomRangeEndWithTolerance = randomRangeEnd + TOLERANCE

console.log(randomRangeStartWithTolerance, randomRangeEndWithTolerance)

const infoMessage = `Проміжок був від ${randomRangeStart} до ${randomRangeEnd}`
const userChoice = parseInt(
  prompt(
    `Введіть число від ${RANGE_START} до ${RANGE_END}\nЯкщо ви потрапите в проміжок (+-${TOLERANCE}) вибраний комп'ютером то виграєте`,
    10,
  ),
)

if (userChoice >= RANGE_START && userChoice <= RANGE_END) {
  if (userChoice >= randomRangeStartWithTolerance && userChoice <= randomRangeEndWithTolerance) {
    alert(`Ви виграли! ${infoMessage}`)
  } else {
    alert(`Ви програли. ${infoMessage}`)
  }
} else {
  alert(`Невірне число, треба було вибрати число в діапазоні від ${RANGE_START} до ${RANGE_END}`)
}
