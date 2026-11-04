// Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.

if (confirm('Почати тестування?')) {
  function getSeasonName(monthNumber: number): string {
    switch (monthNumber) {
      case 12:
      case 1:
      case 2:
        return 'winter'
      case 3:
      case 4:
      case 5:
        return 'spring'
      case 6:
      case 7:
      case 8:
        return 'summer'
      case 9:
      case 10:
      case 11:
        return 'fall'
      default:
        return 'unknown'
    }
  }
  const monthNumber = parseInt(prompt(`Введіть номер місяця`, '5') ?? '5')
  const seasonName = getSeasonName(monthNumber)
  document.write(`${monthNumber} month -> ${seasonName}`)
}
