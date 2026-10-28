'use strict'

//Морський бій
// Ворожий корабель, може знаходитись в одному із квадратів (кількість квадратів вводиться з клавіатури),
// які розташовані лінійно (один за одним) на річці.
// Позиція корабля визначається комп’ютером випадковим чином.

// Гра відбувається за правилами:
// 1) якщо користувач стріляє у заданий квадрат (тобто вводиться номер квадрата), то корабель потоплено;
// 2) якщо корабель знаходиться у сусідньому по відношенню до квадрата, де знаходиться корабель, то корабель пошкоджено (про це повідомляємо користувача).
// За два постріли спробувати потопити корабель.
const startGame = confirm('Пограємо в морський бій?')
if (startGame) {
  const minCellCount = 3
  const minCellNumber = 1
  const maxCellNumber = parseInt(prompt(`Введіть кількість квадратів поля (від ${minCellCount}!)`))
  if (maxCellNumber >= minCellCount) {
    const ADJACENT_DISTANCE = 1
    const shipCellPosition =
      Math.floor(Math.random() * (maxCellNumber - minCellNumber + 1)) + minCellNumber

    let userShot = parseInt(
      prompt(`Перший постріл🎯. виберіть клітинку від ${minCellNumber} до ${maxCellNumber}`, 1),
    )

    if (shipCellPosition === userShot) {
      alert('💥Ви влучили з першого разу, корабель потоплено☠️!!🏆🏆🏆')
    } else {
      let message
      if (Math.abs(userShot - shipCellPosition) === ADJACENT_DISTANCE) {
        message = 'Корабель пошкоджено🔥.'
      } else {
        message = '💦Повз! 🐟 Рибки в шоці, корабель у порядку! 😎'
      }
      message += `\nДругий постріл🎯 виберіть клітинку від ${minCellNumber} до ${maxCellNumber}`
      userShot = parseInt(prompt(message, 2))
      if (userShot === shipCellPosition) {
        alert('💥Ви влучили, корабель потоплено☠️!!🏆🏆🏆')
      } else {
        alert(`Ви програли. До побачення!`)
      }
    }
  } else alert('Ну я так не граю, давай більше клітинок!! Кораблю ніде розвернутися😤')
} else alert('До побачення')
