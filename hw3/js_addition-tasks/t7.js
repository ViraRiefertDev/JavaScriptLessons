'use strict'
//*Задача  7
//*Гра в кості
// Правила гри:
// 1) користувач може кинути кості не більше двох разів
//    (користувач сам вирішує чи робити, чи не робити другий кидок);
// 2) якщо випадає парне число, то кількість балів збільшується на це число;
// 3) якщо випадає непарне число, то кількість балів зменшується на це число;
// 4) виграє той, у кого кількість балів більша.

const startGame = confirm('Пограємо у кості?')
if (startGame) {
  const MIN_NUMBER_OF_DOTS = 1
  const MAX_NUMBER_OF_DOTS = 6

  let resultPlayer1 = 0
  let resultPlayer2 = 0

  let diceRoll =
    Math.floor(Math.random() * (MAX_NUMBER_OF_DOTS - MIN_NUMBER_OF_DOTS + 1)) + MIN_NUMBER_OF_DOTS
  if (diceRoll % 2 === 0) {
    resultPlayer1 += diceRoll
  } else {
    resultPlayer1 -= diceRoll
  }
  let wantsSecondRoll = confirm(
    `Перший гравець кидає кубик. Випало ${diceRoll}. Ваша кількість балів тепер: ${resultPlayer1}\n Будете кидати другий раз?`,
  )
  if (wantsSecondRoll) {
    diceRoll =
      Math.floor(Math.random() * (MAX_NUMBER_OF_DOTS - MIN_NUMBER_OF_DOTS + 1)) + MIN_NUMBER_OF_DOTS
    if (diceRoll % 2 === 0) {
      resultPlayer1 += diceRoll
    } else {
      resultPlayer1 -= diceRoll
    }
    alert(
      `Перший гравець кидає кубик. Випало ${diceRoll}.\nВаша кількість балів тепер: ${resultPlayer1}`,
    )
  }

  // Другий гравець

  diceRoll =
    Math.floor(Math.random() * (MAX_NUMBER_OF_DOTS - MIN_NUMBER_OF_DOTS + 1)) + MIN_NUMBER_OF_DOTS
  if (diceRoll % 2 === 0) {
    resultPlayer2 += diceRoll
  } else {
    resultPlayer2 -= diceRoll
  }
  wantsSecondRoll = confirm(
    `Другий гравець кидає кубик. Випало ${diceRoll}. Ваша кількість балів тепер: ${resultPlayer2}\n Будете кидати другий раз?`,
  )
  if (wantsSecondRoll) {
    diceRoll =
      Math.floor(Math.random() * (MAX_NUMBER_OF_DOTS - MIN_NUMBER_OF_DOTS + 1)) + MIN_NUMBER_OF_DOTS
    if (diceRoll % 2 === 0) {
      resultPlayer2 += diceRoll
    } else {
      resultPlayer2 -= diceRoll
    }
    alert(
      `Другий гравець кидає кубик. Випало ${diceRoll}.\nВаша кількість балів тепер: ${resultPlayer2}`,
    )
  }
  let resultMessage = `Рахунок ${resultPlayer1}:${resultPlayer2}.🎉🥇 Переміг гравець `
  if (resultPlayer1 > resultPlayer2) {
    resultMessage += '1'
  } else if (resultPlayer2 > resultPlayer1) {
    resultMessage += '2'
  } else {
    resultMessage = `Нічия! 🤝 Рахунок ${resultPlayer1}:${resultPlayer2}`
  }
  alert(resultMessage)
} else {
  alert('До побачення!')
}
