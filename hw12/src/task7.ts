//Сформувати двовимірний масив (4*8) з номерами днів (описати окремий тип для днів).
// Заповнити його випадковим чином. Підрахувати для кожного рядка кількість неділь.

if (confirm('Почати тестування?')) {
  const columnCount = 8
  const rowCount = 4
  type Day = 1 | 2 | 3 | 4 | 5 | 6 | 7

  function transform2DArrayToString(arr: Day[][]): string {
    return arr.map((row) => row.join(' ')).join('<br>')
  }

  function generateRandomDayNumber(): Day {
    const minNumber: Day = 1
    const maxNumber: Day = 7
    return (Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber) as Day
  }
  function generateRandomDay2DArray(rowCount: number, columnCount: number): Day[][] {
    return Array.from({ length: rowCount }, () =>
      Array.from({ length: columnCount }, () => generateRandomDayNumber()),
    )
  }

  function countDayOccurrencesPerRow(arr: Day[][], searchDay: Day): number[] {
    return arr.map((row) => row.reduce((sum, day) => (day === searchDay ? sum + 1 : sum), 0))
  }
  const dayNumber: Day = 7
  const randomDaysArray = generateRandomDay2DArray(rowCount, columnCount)
  const countOfSundaysPerRow = countDayOccurrencesPerRow(randomDaysArray, dayNumber)

  document.write(`
      <p>${transform2DArrayToString(randomDaysArray)}</p>
      <p>Для кожного рядка кількість неділь:${countOfSundaysPerRow}</p>
    `)
}
