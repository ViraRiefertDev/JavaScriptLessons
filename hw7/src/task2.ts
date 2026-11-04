// Задача 2. Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.

if (confirm('Почати тестування?')) {
  const isWorkingDay = function (dayNumber: number): boolean {
    switch (dayNumber) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        return true
      case 6:
      case 7:
        return false
      default:
        throw new Error('Помилка не вірний день тижня')
    }
  }
  const dayNumber = parseInt(prompt(`Введіть номер дня`, '5') ?? '5')
  const message = isWorkingDay(dayNumber) ? 'робочий день' : 'вихідний день'
  document.write(`${dayNumber} день це ${message}`)
}
