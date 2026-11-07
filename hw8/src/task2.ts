//Задача 2. Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
// номери днів, протягом яких кількість відвідувачів була меншою за 20;
// номери днів, коли кількість відвідувачів була мінімальною;
// номери днів, коли кількість відвідувачів була максимальною;
// загальну кількість клієнтів у робочі дні та окремо загальну кількість клієнтів на вихідних.

if (confirm('Почати тестування?')) {
  const isLess = (a: number, b: number): boolean => a < b
  const isGreater = (a: number, b: number): boolean => a > b

  function getDaysWithVisitorsBelowLimit(visitorsArray: number[], visitorsLimit: number): number[] {
    const daysArray: number[] = []
    for (let i = 0; i < visitorsArray.length; i++) {
      if (visitorsArray[i] < visitorsLimit) daysArray.push(i + 1)
    }
    return daysArray
  }

  function getDaysWithExtremeVisitors(
    visitorsArray: number[],
    compare: (a: number, b: number) => boolean,
  ): number[] {
    let daysArray: number[] = [1]
    let extremeVisitors = visitorsArray[0]
    for (let i = 1; i < visitorsArray.length; i++) {
      if (compare(visitorsArray[i], extremeVisitors)) {
        extremeVisitors = visitorsArray[i]
        daysArray = []
      }
      if (extremeVisitors === visitorsArray[i]) {
        daysArray.push(i + 1)
      }
    }
    return daysArray
  }

  function getTotalVisitorsInDayRange(
    visitorsArray: number[],
    startIndex: number,
    endIndex: number,
  ): number {
    let totalVisitors = 0
    for (let i = startIndex; i <= endIndex; i++) {
      totalVisitors += visitorsArray[i]
    }
    return totalVisitors
  }

  function showVisitorsStatistics(visitorsArray: number[]): void {
    const visitorsLimit = 20
    const startWorkingDayIndex = 0
    const endWorkingDayIndex = 4
    const startWeekendDayIndex = 5
    const endWeekendDayIndex = 6

    const daysWithVisitorsBelowLimit = getDaysWithVisitorsBelowLimit(visitorsArray, visitorsLimit)

    const daysWithMinVisitors = getDaysWithExtremeVisitors(visitorsArray, isLess)
    const daysWithMaxVisitors = getDaysWithExtremeVisitors(visitorsArray, isGreater)
    const totalVisitorsByWorkingDays = getTotalVisitorsInDayRange(
      visitorsArray,
      startWorkingDayIndex,
      endWorkingDayIndex,
    )
    const totalVisitorsByWeekendDays = getTotalVisitorsInDayRange(
      visitorsArray,
      startWeekendDayIndex,
      endWeekendDayIndex,
    )

    document.write(`
      <p>Номери днів, протягом яких кількість відвідувачів була меншою за ${visitorsLimit}: ${daysWithVisitorsBelowLimit.toString() || 'Немає'}</p>
      <p>Номери днів, коли кількість відвідувачів була мінімальною: ${daysWithMinVisitors.toString()}</p>
      <p>Номери днів, коли кількість відвідувачів була максимальною: ${daysWithMaxVisitors.toString()}</p>
      <p>Загальна кількість клієнтів у робочі дні: ${totalVisitorsByWorkingDays}</p>
      <p>Загальна кількість клієнтів на вихідних: ${totalVisitorsByWeekendDays}</p>
      <hr>
      `)
  }

  // 1. Звичайний тиждень
  const visitors1 = [15, 32, 18, 45, 27, 60, 55]

  // 2. Усі дні менше 20 відвідувачів
  const visitors2 = [5, 12, 8, 15, 9, 18, 7]

  // 3. Усі дні більше 20 відвідувачів
  const visitors3 = [25, 30, 40, 35, 50, 70, 65]

  // 4. Однакова кількість відвідувачів
  const visitors4 = [20, 20, 20, 20, 20, 20, 20]

  // 5. Мінімум зустрічається кілька разів
  const visitors5 = [10, 25, 10, 40, 30, 10, 50]

  // 6. Максимум зустрічається кілька разів
  const visitors6 = [50, 20, 50, 15, 30, 50, 10]

  // 7. Нуль відвідувачів у деякі дні
  const visitors7 = [0, 15, 30, 0, 45, 60, 0]

  // 8. Усі дні без відвідувачів
  const visitors8 = [0, 0, 0, 0, 0, 0, 0]

  // 9. Граничні значення 19, 20, 21
  const visitors9 = [19, 20, 21, 19, 20, 21, 20]

  // 10. Найменше відвідувачів на вихідних
  const visitors10 = [45, 35, 50, 40, 30, 5, 5]
  showVisitorsStatistics(visitors1)
  showVisitorsStatistics(visitors2)
  showVisitorsStatistics(visitors3)
  showVisitorsStatistics(visitors4)
  showVisitorsStatistics(visitors5)
  showVisitorsStatistics(visitors6)
  showVisitorsStatistics(visitors7)
  showVisitorsStatistics(visitors8)
  showVisitorsStatistics(visitors9)
  showVisitorsStatistics(visitors10)
}
