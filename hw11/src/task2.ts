if (confirm('Почати тестування?')) {
  //Задача 2. Дано інформацію про прибуток К магазинів протягом тижня. Знайти :
  const getSum = (array: number[]) => array.reduce((sum, curValue) => sum + curValue)
  const numberOfShops = 5
  const getRandomNumber = (minNumber: number, maxNumber: number): number =>
    Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber

  const getWeeklyStoreProfits = (
    minNumber: number = 10,
    maxNumber: number = 1000,
    daysInTheWeek: number = 7,
  ): number[] => Array.from({ length: daysInTheWeek }, () => getRandomNumber(minNumber, maxNumber))

  const generateStoreProfits = (numberOfShops: number): number[][] => {
    return Array.from({ length: numberOfShops }, () => getWeeklyStoreProfits())
  }

  const getString2DArray = (arr: number[][]): string => {
    let resultHtml = '<table border="1" style="border-collapse: collapse;">'

    resultHtml += '<tr><th>Магазин / День</th>'

    for (let j = 0; j < arr[0].length; j++) {
      resultHtml += `<th style="padding: 5px;">День ${j + 1}</th>`
    }

    resultHtml += '</tr>'

    for (let i = 0; i < arr.length; i++) {
      resultHtml += `<tr><th style="padding: 5px;">Магазин ${i + 1}</th>`

      for (const profit of arr[i]) {
        resultHtml += `<td style="padding: 5px; text-align: center;">${profit}</td>`
      }

      resultHtml += '</tr>'
    }

    resultHtml += '</table>'

    return resultHtml
  }

  const getTotalProfitInRange = (
    storesProfits: number[][],
    minDay: number = 1,
    maxDay: number = 7,
  ): number => {
    const minDayIndex = minDay - 1
    const maxDayIndex = maxDay - 1
    let totalProfit = 0
    for (const store of storesProfits) {
      for (let i = minDayIndex; i <= maxDayIndex; i++) {
        totalProfit += store[i]
      }
    }
    return totalProfit
  }

  const storeProfits = generateStoreProfits(numberOfShops)
  let stringStoreProfits = getString2DArray(storeProfits)
  document.write(stringStoreProfits)

  //! 1) загальний прибуток кожного магазину за тиждень;
  const totalProfitForEachStore = storeProfits.map((currentStore) =>
    currentStore.reduce((sum, currentProfit) => sum + currentProfit),
  )

  document.write(`
    <h3>Загальний прибуток кожного магазину за тиждень</h3>
    <table border="1" style="border-collapse: collapse;">
      <tr>
        ${totalProfitForEachStore
          .map((_, index) => `<th style="padding: 8px;">Магазин ${index + 1}</th>`)
          .join('')}
      </tr>
      <tr>
        ${totalProfitForEachStore
          .map((profit) => `<td style="padding: 8px; text-align: center;">${profit}</td>`)
          .join('')}
      </tr>
    </table>
  `)

  //! 2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
  const totalProfitForEachDay: number[] = Array.from({ length: storeProfits[0].length }, () => 0)
  storeProfits.forEach((store) =>
    store.forEach((storeProfit, index) => {
      totalProfitForEachDay[index] += storeProfit
    }),
  )
  document.write(`
  <h3>Загальний прибуток усіх магазинів за кожен день</h3>
  <table border="1" style="border-collapse: collapse;">
    <tr>
      ${totalProfitForEachDay
        .map((_, index) => `<th style="padding: 8px;">День ${index + 1}</th>`)
        .join('')}
    </tr>
    <tr>
      ${totalProfitForEachDay
        .map((profit) => `<td style="padding: 8px; text-align: center;">${profit}</td>`)
        .join('')}
    </tr>
  </table>
  `)

  //! 3) загальний прибуток за робочі дні
  const totalProfitForWorkingDays = getTotalProfitInRange(storeProfits, 1, 5)
  document.write(`
    <h3>Загальний прибуток за робочі дні <span style="font-weight:400">${totalProfitForWorkingDays} грн</span></h3>
  `)

  //! 4) загальний прибуток за вихідні дні
  const totalProfitWeekends = getTotalProfitInRange(storeProfits, 6, 7)
  document.write(`
    <h3>Загальний прибуток за вихідні дні <span style="font-weight:400">${totalProfitWeekends} грн</span></h3>
  `)

  //! 5) максимальний прибуток за середу
  const wednesdayIndex = 2
  const maxProfitForWednesday = storeProfits.reduce(
    (max, currentStore) => Math.max(max, currentStore[wednesdayIndex]),
    0,
  )
  document.write(`
    <h3>Максимальний прибуток за середу <span style="font-weight:400">${maxProfitForWednesday} грн</span></h3>
    `)

  //! 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
  const profitThreshold = 200
  const profitsMoreThanProfitThreshold = storeProfits
    .reduce((arr, currentStore) => arr.concat(currentStore), [])
    .filter((profit) => profit > profitThreshold)
  //* 2 Варіант з методом .flat()
  // const profitsMoreThanProfitThreshold = storeProfits
  //   .flat()
  //   .filter((profit) => profit > profitThreshold)
  const profitsArrayString = profitsMoreThanProfitThreshold.join(', ')
  document.write(`
    <h3>загальний список (одновимірний масив) зі значенням, які що більші за 200</h3>
    ${profitsArrayString}
    `)

  //! 7) відсортувати кожен тиждень за зростанням
  storeProfits.forEach((store) => store.sort((x, y) => x - y))
  stringStoreProfits = getString2DArray(storeProfits)
  document.write(`
    <h3>відсортувати кожен тиждень за зростанням</h3>
    ${stringStoreProfits}
    `)

  //! 8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
  //Оскільки в попередньому завданні ми вже відсортували кожен рядок масиву за зростанням,
  //у цьому завданні можна просто взяти останній елемент кожного рядка, адже він і буде максимальним.
  storeProfits.sort(
    (curStore: number[], nextStore: number[]) => nextStore.at(-1)! - curStore.at(-1)!,
  )
  stringStoreProfits = getString2DArray(storeProfits)
  document.write(`
    <h3>відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні</h3>
    ${stringStoreProfits}
    `)

  //! 9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше)
  // спочатку один раз обчислила суму кожного рядка та додала її в кінець цього ж рядка.
  // Потім відсортувала рядки за цими значеннями й видалила допоміжні суми за допомогою pop().
  //Таким чином вдалося уникнути повторних обчислень у компараторі sort().
  storeProfits.forEach((store) => {
    store.push(getSum(store))
  })

  storeProfits
    .sort((curStore, nextStore) => {
      return nextStore.at(-1)! - curStore.at(-1)!
    })
    .forEach((store) => store.pop())
  stringStoreProfits = getString2DArray(storeProfits)
  document.write(`
    <h3>упорядкувати тижні (рядки) за спаданням суми елементів</h3>
    ${stringStoreProfits}
    `)
}
