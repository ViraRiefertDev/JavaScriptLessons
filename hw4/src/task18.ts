// Задача 15. Користувача поступово вводить показники температури протягом року. Знайти середню температуру.

if (confirm('Почати тестування?')) {
  const MONTHS_IN_YEAR = 12
  let tempSum = 0
  for (let i = 1; i <= MONTHS_IN_YEAR; i++) {
    const temp = parseFloat(prompt(`Введіть температуру протягом ${i} місяця: `, '20') ?? '20')
    tempSum += temp
  }
  const averageTemp = tempSum / MONTHS_IN_YEAR
  document.write(`Середня температура протягом року: ${averageTemp.toFixed(1)} градусів`)
}
