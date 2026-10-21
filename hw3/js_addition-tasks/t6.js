'use strict'
//Задача  6
//Полювання. Заєць знаходиться у верхньому лівому кутку поля.
// Поле складається з двох рядків і двох стовпців.
// За один крок заєць може стрибнути у будь-яку із вільних клітинок.
// Користувач ставить пастку вказуючи номер рядка і стовпця клітинки.
// Якщо заєць потрапляє у пастку, то користувач виграв і отримав 100 балів.
// Якщо користувач зловить зайця за другою спробою, то одержує 50 балів.
const FIRST_ATTEMPT_POINTS = 100
const SECOND_ATTEMPT_POINTS = 50
const startGame = confirm('Пограємо в полювання на зайця?')
if (startGame) {
  const COUNT_OF_CELLS = 4
  const FIRST_CELL = 1
  const countOfAvailableCells = COUNT_OF_CELLS - 1
  const startGameFieldRows = `
┌─────┬─────┐
│ 🐰   │  1     │
├─────┼─────┤
│  2     │  2     │
└─────┴─────┘
`
  const startGameFieldColumns = `
┌─────┬─────┐
│ 🐰   │  2     │
├─────┼─────┤
│  1    │  2     │
└─────┴─────┘
`
  const gameFieldRows = `
┌─────┬─────┐
│  1  │  1  │
├─────┼─────┤
│  2  │  2  │
└─────┴─────┘
`
  const gameFieldColumns = `
┌─────┬─────┐
│  1  │  2  │
├─────┼─────┤
│  1  │  2  │
└─────┴─────┘
`
  let rabbitPositionCell = 1
  let rabbitJumpOffset =
    Math.floor(Math.random() * (countOfAvailableCells - FIRST_CELL + 1)) + FIRST_CELL
  rabbitPositionCell =
    ((rabbitPositionCell + rabbitJumpOffset - FIRST_CELL) % COUNT_OF_CELLS) + FIRST_CELL
  console.log(rabbitPositionCell)
  let userTrapRow = prompt(
    `${startGameFieldRows}\n🪤🥕Ставимо пастку. Введіть номер рядка пастки(1 або 2)`,
    2,
  )

  let userTrapColumn = prompt(
    `${startGameFieldColumns}\n🪤🥕Введіть номер стовпця пастки(1 або 2)`,
    2,
  )

  let userTrapCoordinate = userTrapRow + userTrapColumn
  let userTrap
  switch (userTrapCoordinate) {
    case '11':
      userTrap = 1
      break
    case '12':
      userTrap = 2
      break
    case '21':
      userTrap = 3
      break
    case '22':
      userTrap = 4
      break
    default:
      userTrap = null
      break
  }
  if (userTrap === rabbitPositionCell) {
    alert(
      `🎯💥 ОГО! З ПЕРШОГО РАЗУ! 🏆🐰 Зайчик навіть морквинку дожувати не встиг! 🥕😂 Ти справжній майстер полювання! 💯 +${FIRST_ATTEMPT_POINTS} балів! 🎉🥇`,
    )
  } else {
    rabbitJumpOffset =
      Math.floor(Math.random() * (countOfAvailableCells - FIRST_CELL + 1)) + FIRST_CELL
    rabbitPositionCell =
      ((rabbitPositionCell + rabbitJumpOffset - FIRST_CELL) % COUNT_OF_CELLS) + FIRST_CELL
    console.log(rabbitPositionCell)
    userTrapRow = prompt(
      `${gameFieldRows}\n🐰💨 Ха-ха! Зайчик перестрибнув твою пастку й показав тобі язика! 😜🥕 Але не здавайся! 🪤 У тебе є ще одна спроба зловити цього пухнастого хитруна! 🎯\n🪤🥕Ставимо пастку. Введіть номер рядка пастки(1 або 2)`,
      2,
    )
    userTrapColumn = prompt(`${gameFieldColumns}\n🪤🥕Введіть номер стовпця пастки(1 або 2)`, 2)
    userTrapCoordinate = userTrapRow + userTrapColumn
    switch (userTrapCoordinate) {
      case '11':
        userTrap = 1
        break
      case '12':
        userTrap = 2
        break
      case '21':
        userTrap = 3
        break
      case '22':
        userTrap = 4
        break
      default:
        userTrap = null
        break
    }
    if (userTrap === rabbitPositionCell) {
      alert(
        `🎉🐰 ПОПАВСЯ, ПУХНАСТИЙ ХИТРУНЕ! 🪤🥕 З першого разу зайчик тебе перехитрив, але вдруге удача була на твоєму боці! 😎🏆 +${SECOND_ATTEMPT_POINTS} балів! 🎯🥈`,
      )
    } else {
      alert(
        `🐰💨 Ха-ха! Зайчик знову втік! 🥕 Твої пастки йому не страшні! 🪤😂 0 балів, зате заєць ситий і щасливий! 🏆🐇`,
      )
    }
  }
} else {
  alert('До побачення!😭')
}
