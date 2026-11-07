// Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».

if (confirm('Почати тестування?')) {
  function showNameCountResult(nameCount: number, referenceName: string): void {
    document.write(`
    <p>Ім'я ${referenceName} зустрічається ${nameCount} разів</p>
    `)
  }

  function countNameOccurrences(studentsArray: string[], referenceName: string): number {
    let nameCount = 0
    for (let i = 0; i < studentsArray.length; i++) {
      if (studentsArray[i] === referenceName) nameCount++
    }
    return nameCount
  }

  const referenceName = 'Іван'
  // 1. Ім'я Іван зустрічається кілька разів
  const students1 = ['Іван', 'Марія', 'Олег', 'Іван', 'Анна', 'Петро', 'Іван']

  // 2. Ім'я Іван відсутнє
  const students2 = ['Олександр', 'Марія', 'Петро', 'Олена', 'Андрій']

  // 3. Усі учні мають ім'я Іван
  const students3 = ['Іван', 'Іван', 'Іван', 'Іван', 'Іван']

  let nameCount = countNameOccurrences(students1, referenceName)
  showNameCountResult(nameCount, referenceName)
  nameCount = countNameOccurrences(students2, referenceName)
  showNameCountResult(nameCount, referenceName)
  nameCount = countNameOccurrences(students3, referenceName)
  showNameCountResult(nameCount, referenceName)
}
