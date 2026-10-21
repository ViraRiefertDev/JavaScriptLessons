'use strict'

//Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

const MAX_NUMBER = 5
const MIN_NUMBER = 1

const startGame = confirm(
  `Спробуйте вгадати число від ${MIN_NUMBER} до ${MAX_NUMBER} за 2 cпроби. Готові? Погнали`,
)

if (!startGame) {
  alert('До побачення!!')
} else {
  const randomNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER
  let userAnswer = parseInt(
    prompt(`Перша спроба. Введіть число від ${MIN_NUMBER} до ${MAX_NUMBER}`),
  )
  if (userAnswer === randomNumber) {
    alert('Ви вгадали з першої спроби! Вітаємо!! 🎆')
  } else {
    userAnswer = parseInt(
      prompt(`Неправильно😢. Друга спроба. Введіть число від ${MIN_NUMBER} до ${MAX_NUMBER}`),
    )
    if (userAnswer === randomNumber) {
      alert('Ви вгадали! 👍')
    } else {
      alert('На жаль це також не правильно...😢. Може наступного разу...')
    }
  }
}
