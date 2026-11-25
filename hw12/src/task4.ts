// Задача 4. Для розглянутих методів сортування спробувати вивести етапи сортування
// шляхом виведення відповідних таблиць за зразком.

if (confirm('Почати тестування?')) {
  function getRandomNumber(minNumber: number, maxNumber: number): number {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
  }
  function getRandomNumberArray(
    numberCount: number,
    minNumber: number,
    maxNumber: number,
  ): number[] {
    return Array.from({ length: numberCount }, () => getRandomNumber(minNumber, maxNumber))
  }
  const numberCount = 15
  const minNumber = -100
  const maxNumber = 100

  const arr = getRandomNumberArray(numberCount, minNumber, maxNumber)
  document.write(`[${arr}]`)

  //!---Сортування бульбашкою
  function showStepsBubbleSort(arr: number[]): void {
    let changeStatus: boolean
    let endIndex = arr.length
    let resultHtml = '<h2>Відсортований бульбашкою:</h2> '
    const newArr = [...arr]
    do {
      changeStatus = false
      for (let i = 1; i < endIndex; i++) {
        if (newArr[i - 1] > newArr[i]) {
          ;[newArr[i], newArr[i - 1]] = [newArr[i - 1], newArr[i]]
          resultHtml += `[${newArr}]<br>`
          changeStatus = true
        }
      }
      endIndex--
    } while (changeStatus && endIndex > 1)
    document.write(`${resultHtml}`)
  }

  showStepsBubbleSort(arr)

  //!---Сортування змішуванням
  function showStepsCocktailSort(arr: number[]): void {
    const newArr = [...arr]
    let changeStatus: boolean
    let startIndex = 1
    let endIndex = newArr.length - 1
    let resultHtml = '<h2>Відсортований змішуванням:</h2> '
    do {
      changeStatus = false
      for (let i = startIndex; i <= endIndex; i++) {
        if (newArr[i - 1] > newArr[i]) {
          ;[newArr[i], newArr[i - 1]] = [newArr[i - 1], newArr[i]]
          resultHtml += `[${newArr}]<br>`
          changeStatus = true
        }
      }
      endIndex--
      if (changeStatus === false) break
      changeStatus = false
      for (let i = endIndex; i >= startIndex; i--) {
        if (newArr[i - 1] > newArr[i]) {
          ;[newArr[i], newArr[i - 1]] = [newArr[i - 1], newArr[i]]
          resultHtml += `[${newArr}]<br>`
          changeStatus = true
        }
      }
      startIndex++
    } while (changeStatus && startIndex <= endIndex)
    document.write(`${resultHtml}`)
  }

  showStepsCocktailSort(arr)

  //!---Сортування включеннями
  function showStepsInsertionSort(arr: number[]): void {
    const newArr = [...arr]
    let resultHtml = ' <h2>Відсортований включеннями:</h2> '
    for (let k = 1; k < newArr.length; k++) {
      const currentEl = newArr[k]
      let i = k - 1
      while (i >= 0 && newArr[i] > currentEl) {
        newArr[i + 1] = newArr[i]
        const tempArr = [...newArr]
        tempArr[i] = currentEl
        resultHtml += `[${tempArr}]<br>`
        i--
      }
      newArr[i + 1] = currentEl
    }
    document.write(`${resultHtml}`)
  }

  showStepsInsertionSort(arr)
}
