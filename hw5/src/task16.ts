// 13. Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M.
// Маючи К снарядів користувач намагається потопити корабель.

if (confirm('Почати тестування?')) {
  const rowCount = 4
  const columnCount = 3
  const maxShellCount = 5
  let currentShell = 1

  const gameStart = confirm(
    `Пограємо в морський бій?\nПоле ${columnCount}x${rowCount}\n В тебе ${maxShellCount} снарядів`,
  )
  if (gameStart) {
    const shipRowPosition = Math.floor(Math.random() * rowCount) + 1
    const shipColumnPosition = Math.floor(Math.random() * columnCount) + 1
    console.log(shipColumnPosition, shipRowPosition)
    let failureMessage = ''
    do {
      const userShotColumn = parseInt(
        prompt(
          `${failureMessage}${currentShell} постріл🎯. Виберіть координату X від 1 до ${columnCount}`,
          '1',
        ) ?? '1',
      )
      const userShotRow = parseInt(prompt(`Виберіть координату Y від 1 до ${rowCount}`, '1') ?? '1')
      if (userShotColumn === shipColumnPosition && userShotRow === shipRowPosition) {
        alert(`💥Ви влучили з ${currentShell} разу, корабель потоплено☠️!!🏆🏆🏆`)

        break
      }
      currentShell++
      failureMessage = '💦Повз! 🐟 Рибки в шоці, корабель у порядку! 😎\n'
    } while (currentShell <= maxShellCount)
    if (currentShell === maxShellCount + 1) alert(`Постріли закінчились, ви на жаль програли😭`)
  } else {
    alert('До побачення!')
  }
}
