'use strict'

//Морський бій
// Модифікувати попередню задачу з можливістю після пострілу переміщення корабля
// у випадковим чином вибрану сусідню клітинку (якщо звичайно корабель не було потоплено за першим разом).

const startGame = confirm('Пограємо в морський бій?')
if (startGame) {
  const minCellCount = 3
  const minCellNumber = 1

  const maxCellNumber = parseInt(prompt(`Введіть кількість квадратів поля (від ${minCellCount}!)`))
  if (maxCellNumber >= minCellCount) {
    const ADJACENT_DISTANCE = 1
    let shipCellPosition =
      Math.floor(Math.random() * (maxCellNumber - minCellNumber + 1)) + minCellNumber
    console.log(shipCellPosition)
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
      const shipMoveDistance = 1
      let shipMoveDirection
      if (shipCellPosition === minCellNumber) {
        shipMoveDirection = shipMoveDistance
      } else if (shipCellPosition === maxCellNumber) {
        shipMoveDirection = -shipMoveDistance
      } else {
        shipMoveDirection = Math.random() < 0.5 ? -shipMoveDistance : shipMoveDistance
      }
      shipCellPosition += shipMoveDirection
      console.log(`Корабель перстрибнув на клітинку: ${shipCellPosition}`)
      message += `\nКорабель перемістився у сусідню клітинку\nДругий постріл🎯 виберіть клітинку від ${minCellNumber} до ${maxCellNumber}`
      userShot = parseInt(prompt(message, 2))
      if (userShot === shipCellPosition) {
        alert('💥Ви влучили, корабель потоплено☠️!!🏆🏆🏆')
      } else {
        alert(`Ви програли😭. До побачення!`)
      }
    }
  } else alert('Ну я так не граю, давай більше клітинок!! Кораблю ніде розвернутися😤')
} else alert('До побачення')
