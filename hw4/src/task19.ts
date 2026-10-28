// Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів.
// Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня.

if (confirm('Почати тестування?')) {
  const numberOfWeeks = parseInt(prompt(`Введіть кількість тижнів: `, '2') ?? '2')
  const daysInWeek = 7
  let totalProfit = 0
  let resultHtml = ''
  for (let week = 1; week <= numberOfWeeks; week++) {
    let weeklyProfit = 0
    for (let day = 1; day <= daysInWeek; day++) {
      const dailyProfit = parseFloat(
        prompt(`Введіть прибуток за ${day}-й день ${week}-го тижня`, '1000') ?? '1000',
      )
      weeklyProfit += dailyProfit
    }
    totalProfit += weeklyProfit
    resultHtml += `<p>Величина прибутку за ${week}-й тиждень: ${weeklyProfit}</p>`
  }
  resultHtml += `<p>Загальна величина прибутку ${totalProfit}</p>`
  document.write(resultHtml)
}
