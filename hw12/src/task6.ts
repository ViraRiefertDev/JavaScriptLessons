//Задача 6. Дано масив імен.
// Застосовуючи відповідне сортування та бінарний пошук визначити,
// чи є у масиві ім’я довжиною 5 символів і під яким індексом.

if (confirm('Почати тестування?')) {
  function generateResultMessage(resultIndex: number): string {
    return resultIndex !== -1
      ? `Елемент є під індексом ${resultIndex} у відсортованому масиві`
      : 'Елемента немає'
  }

  function bubbleSortStringArrayByLength(arr: string[]): string[] {
    const copyArr = [...arr]
    let changeStatus: boolean
    let lastIndex = copyArr.length - 1
    do {
      changeStatus = false
      for (let i = 1; i <= lastIndex; i++) {
        if (copyArr[i - 1].length > copyArr[i].length) {
          ;[copyArr[i], copyArr[i - 1]] = [copyArr[i - 1], copyArr[i]]
          changeStatus = true
        }
      }
      lastIndex--
    } while (changeStatus)
    return copyArr
  }

  function findNameWithLengthInArray(sortedArray: string[], nameLength: number): number {
    let startIndex = 0
    let endIndex = sortedArray.length - 1
    while (startIndex <= endIndex) {
      const middleIndex = Math.floor((startIndex + endIndex) / 2)
      if (sortedArray[middleIndex].length === nameLength) return middleIndex
      if (sortedArray[middleIndex].length < nameLength) startIndex = middleIndex + 1
      else endIndex = middleIndex - 1
    }
    return -1
  }

  // Масив з іменами довжиною 5 символів
  const namesWithFiveLetters = [
    'Anna',
    'Max',
    'Sofia',
    'Daniel',
    'Olga',
    'Emma',
    'Alex',
    'Maria',
    'David',
    'Julia',
  ]

  // Масив без імен довжиною 5 символів
  const namesWithoutFiveLetters = [
    'Kate',
    'Tom',
    'Lisa',
    'Michael',
    'Nina',
    'Mark',
    'Elizabeth',
    'Robert',
    'Victoria',
  ]

  const nameLength = 5
  let sortedArray = bubbleSortStringArrayByLength(namesWithFiveLetters)
  let resultIndex = findNameWithLengthInArray(sortedArray, nameLength)

  document.write(`
    <p>Відсортований масив: ${sortedArray}</p>
    <p>Чи є ім'я довжиною ${nameLength} символів?: ${generateResultMessage(resultIndex)}</p>
    `)

  sortedArray = bubbleSortStringArrayByLength(namesWithoutFiveLetters)
  resultIndex = findNameWithLengthInArray(sortedArray, nameLength)
  document.write(`
    <p>Відсортований масив:${sortedArray}</p>
    <p>Чи є ім'я довжиною ${nameLength} символів?: ${generateResultMessage(resultIndex)}</p>
    `)
}
