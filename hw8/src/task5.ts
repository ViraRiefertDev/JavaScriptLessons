//Задача 5. Дано послідовність оцінок учня. Підрахувати кількість:
// 1)	двійок
// 2)	кількість хороших оцінок (добре, відмінно);
// 3)	кількість оцінок, які нижче середнього.

if (confirm('Почати тестування?')) {
  function getSum(numberArray: number[]): number {
    let sum = 0
    for (let i = 0; i < numberArray.length; i++) {
      sum += numberArray[i]
    }
    return sum
  }
  const getAverageGrade = (gradesArray: number[]): number =>
    getSum(gradesArray) / gradesArray.length

  function getCountOfGradesBelowAverage(gradesArray: number[]): number {
    let result = 0
    const average = getAverageGrade(gradesArray)
    for (let i = 0; i < gradesArray.length; i++) {
      if (gradesArray[i] < average) result++
    }
    return result
  }
  const getCountOfMatchingGrades = (gradesArray: number[], ...matchGrades: number[]): number => {
    let result = 0
    for (let i = 0; i < gradesArray.length; i++) {
      for (let j = 0; j < matchGrades.length; j++) {
        if (gradesArray[i] === matchGrades[j]) {
          result++
        }
      }
    }
    return result
  }

  function showGradesStatistics(gradesArray: number[]): void {
    const countOfBadGrades = getCountOfMatchingGrades(gradesArray, 2)
    const countOfGoodGrades = getCountOfMatchingGrades(gradesArray, 4, 5)
    const countOfGradesBelowAverage = getCountOfGradesBelowAverage(gradesArray)

    document.write(`
      <p>Кількість двійок: ${countOfBadGrades}</p>
      <p>Кількість хороших оцінок (добре, відмінно): ${countOfGoodGrades}</p>
      <p>Кількість оцінок, які нижче середнього: ${countOfGradesBelowAverage}</p>
      <hr>
      `)
  }

  // 1. Змішані оцінки
  const grades1 = [5, 4, 3, 2, 5, 4, 3, 2, 5]

  // 2. Тільки хороші оцінки
  const grades2 = [5, 5, 4, 5, 4, 4, 5]

  // 3. Усі оцінки однакові
  const grades3 = [3, 3, 3, 3, 3, 3]

  // 4. Багато двійок, одна п'ятірка
  const grades4 = [2, 2, 2, 2, 2, 5]

  // 5. Граничний випадок — одна оцінка
  const grades5 = [2]

  showGradesStatistics(grades1)
  showGradesStatistics(grades2)
  showGradesStatistics(grades3)
  showGradesStatistics(grades4)
  showGradesStatistics(grades5)
}
