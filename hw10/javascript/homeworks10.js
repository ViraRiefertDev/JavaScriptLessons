"use strict";
if (confirm('Почати тестування?')) {
    // Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
    const prices = Array.from({ length: 100 }, () => Math.floor(Math.random() * 10000 + 1));
    // console.log(prices)
    //! 1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
    // const newArrayWithPricesMoreThen1000 = prices.filter((el) => el > 1000)
    // console.log(newArrayWithPricesMoreThen1000)
    //! 2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
    //*1 Варіант
    // const newArrayWithIndexPricesMoreThen1000: number[] = []
    // prices.forEach((el, index) => {
    //   if (el > 1000) newArrayWithIndexPricesMoreThen1000.push(index)
    // })
    //*2 Варіант
    // const newArrayWithIndexPricesMoreThen1000 = prices
    //   .map((_, index) => index)
    //   .filter((index) => prices[index] > 1000)
    //*3 Варіант
    // const initialArray: number[] = []
    // const newArrayWithIndexPricesMoreThen1000 = prices.reduce((acc, currValue, currIndex) => {
    //   if (currValue > 1000) acc.push(currIndex)
    //   return acc
    // }, initialArray)
    // console.log(newArrayWithIndexPricesMoreThen1000)
    //! 3)Сформувати список з тих цін, які більші за попереднє значення
    // const pricesHigherThanPrevious = prices.filter(
    //   (el, index, refArray) => index > 0 && el > refArray[index - 1],
    // )
    // console.log(pricesHigherThanPrevious)
    //! 4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
    // const maxPrice = prices.reduce((acc, curEl) => (curEl > acc ? curEl : acc))
    // const pricesAsPercentageOfMax = prices.map((el) => Math.round((el / maxPrice) * 1000) / 10)
    // console.log(pricesAsPercentageOfMax)
    //! 5)Підрахувати кількість змін цін
    // const priceChangeCount = prices.reduce(
    //   (acc, currentValue, currentIndex, refArr) =>
    //     currentIndex > 0 && currentValue !== refArr[currentIndex - 1] ? acc + 1 : acc,
    //   0,
    // )
    // console.log(priceChangeCount)
    //! 6)Визначити, чи є ціна, що менше 1000
    // const hasPriceBelow1000 = prices.some((el) => el < 1000)
    // console.log(hasPriceBelow1000)
    //! 7)Визначати, чи усі ціни більше за 1000
    // const allPricesMoreThan1000 = prices.every((el) => el > 1000)
    // console.log(allPricesMoreThan1000)
    //! 8)Підрахувати кількість цін, що більше за 1000
    // const countOfPricesMoreThan1000 = prices.reduce(
    //   (acc, currentValue) => (currentValue > 1000 ? acc + 1 : acc),
    //   0,
    // )
    // console.log(countOfPricesMoreThan1000)
    //! 9)Підрахувати суму цін, що більше за 1000
    // const sumOfPricesMoreThan1000 = prices.reduce(
    //   (acc, currentValue) => (currentValue > 1000 ? acc + currentValue : acc),
    //   0,
    // )
    // console.log(sumOfPricesMoreThan1000)
    //! 10)Знайти першу ціну, що більше за 1000
    // const firstPriceAbove1000 = prices.find((el) => el > 1000)
    // console.log(firstPriceAbove1000)
    //! 11)Знайти індекс першої ціни, що більше за 1000
    // const firstPriceIndexAbove1000 = prices.findIndex((el) => el > 1000)
    // console.log(firstPriceIndexAbove1000)
    //! 12)Знайти останню ціну, що більше за 1000
    // const lastPriceAbove1000 = prices.findLast((el) => el > 1000)
    // console.log(lastPriceAbove1000)
    //! 13)Знайти індекс останньої ціни, що більше за 1000
    const lastPriceIndexAbove1000 = prices.findLastIndex((el) => el > 1000);
    console.log(lastPriceIndexAbove1000);
}
