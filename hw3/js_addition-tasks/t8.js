'use strict'

//З клавіатури вводиться кількість сторін багатокутника.
// Необхідно вивести назву фігури («трикутник», «чотирикутник», «п’ятикутиник», «шестикутник»).

const numberOfSidesOfPolygon = parseInt(prompt('Введіть кількість сторін багатокутника: ', 3))

let figureName

switch (numberOfSidesOfPolygon) {
  case 3:
    figureName = 'трикутник'
    break
  case 4:
    figureName = 'чотирикутник'
    break
  case 5:
    figureName = 'п’ятикутиник'
    break
  case 6:
    figureName = 'шестикутник'
    break
  default:
    figureName = 'невідомо'
    break
}

document.write(`
  <p>Фігура з кількістю сторін ${numberOfSidesOfPolygon} називається ${figureName}</p>
  `)
