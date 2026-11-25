//  Дано масив 30 випадкових цілих чисел.
// Підрахувати скільки було обмінів під час сортування бульбашкою / змішуванням / включеннями.

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
  const numberCount = 30
  const minNumber = -100
  const maxNumber = 100

  const arr = getRandomNumberArray(numberCount, minNumber, maxNumber)
  document.write(`[${arr}]`)

  //!---Сортування бульбашкою
  function bubbleSort(arr: number[]): [number[], number] {
    let changeStatus: boolean
    let endIndex = arr.length
    let swapCount = 0
    const newArr = [...arr]
    do {
      changeStatus = false
      for (let i = 1; i < endIndex; i++) {
        if (newArr[i - 1] > newArr[i]) {
          ;[newArr[i], newArr[i - 1]] = [newArr[i - 1], newArr[i]]
          swapCount++
          changeStatus = true
        }
      }
      endIndex--
    } while (changeStatus && endIndex > 1)
    return [newArr, swapCount]
  }
  const [bubbleSortedArray, swapCountBubble] = bubbleSort(arr)
  document.write(`
    <h2>Відсортований бульбашкою:</h2> 
    [${bubbleSortedArray}]
    <p>Кількість обмінів під час сортування: <span style='font-weight:600'>${swapCountBubble}</span></p>
    `)

  //!---Сортування змішуванням
  function cocktailSort(arr: number[]): [number[], number] {
    const newArr = [...arr]
    let changeStatus: boolean
    let startIndex = 1
    let endIndex = newArr.length - 1
    let swapCount = 0

    do {
      changeStatus = false
      for (let i = startIndex; i <= endIndex; i++) {
        if (newArr[i - 1] > newArr[i]) {
          ;[newArr[i], newArr[i - 1]] = [newArr[i - 1], newArr[i]]
          swapCount++
          changeStatus = true
        }
      }
      endIndex--
      if (changeStatus === false) break
      changeStatus = false
      for (let i = endIndex; i >= startIndex; i--) {
        if (newArr[i - 1] > newArr[i]) {
          ;[newArr[i], newArr[i - 1]] = [newArr[i - 1], newArr[i]]
          swapCount++
          changeStatus = true
        }
      }
      startIndex++
    } while (changeStatus && startIndex <= endIndex)
    return [newArr, swapCount]
  }

  const [cocktailSortedArray, swapCountCocktail] = cocktailSort(arr)

  document.write(`
    <h2>Відсортований змішуванням:</h2> 
    [${cocktailSortedArray}]
    <p>Кількість обмінів під час сортування: <span style='font-weight:600'>${swapCountCocktail}</span></p>
    `)

  //!---Сортування включеннями
  function insertionSort(arr: number[]): [number[], number] {
    let shiftCount = 0
    const newArr = [...arr]
    for (let k = 1; k < newArr.length; k++) {
      const currentEl = newArr[k]
      let i = k - 1
      while (i >= 0 && newArr[i] > currentEl) {
        newArr[i + 1] = newArr[i]
        shiftCount++
        i--
      }
      newArr[i + 1] = currentEl
    }
    return [newArr, shiftCount]
  }

  const [insertionSortedArray, shiftCountInsertion] = insertionSort(arr)
  document.write(`
    <h2>Відсортований включеннями:</h2> 
    [${insertionSortedArray}]
    <p>Кількість обмінів під час сортування: <span style='font-weight:600'>${shiftCountInsertion}</span></p>
    `)
}
