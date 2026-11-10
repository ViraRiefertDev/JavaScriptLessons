"use strict";
var _a;
if (confirm('Почати тестування?')) {
    //*1. Користувач вводить кількість елементів.
    // Створити масив, що складається з вказаної кількості елементів заповнених нулями.
    // const countOfArrayElements = parseInt(prompt(`Введіть кількість елементів масиву: `, '5') ?? '5')
    //Варіант 1
    // const array = Array.from({ length: countOfArrayElements }, () => 0)
    //Варіант 2
    // const array = new Array(countOfArrayElements).fill(0)
    //-------------------------------------------------------------------------------------------------------------
    // *2. Користувач вводить кількість елементів.
    // Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.
    // const countOfArrayElements = parseInt(prompt(`Введіть кількість елементів масиву: `, '5') ?? '5')
    // const halfOfArrayLength = Math.floor(countOfArrayElements / 2)
    //Варіант 1
    // const array = new Array(countOfArrayElements)
    //   .fill(1, 0, halfOfArrayLength)
    //   .fill(7, halfOfArrayLength)
    //Варіант 2
    // const array = Array.from({ length: countOfArrayElements }, (_, index) => {
    //   if (index < halfOfArrayLength) return 1
    //   else return 7
    // })
    // console.log(array)
    //-------------------------------------------------------------------------------------------------------------
    //*3. Користувач вводить кількість елементів.
    // Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.
    const countOfArrayElements = parseInt((_a = prompt(`Введіть кількість елементів масиву: `, '10')) !== null && _a !== void 0 ? _a : '10');
    // Варіант 1
    // const array = new Array(countOfArrayElements).fill(1, 0, 5).fill(7, 5)
    // Варіант 2
    // const array = Array.from({ length: countOfArrayElements }, (_, index) => {
    //   if (index < 5) return 1
    //   return 7
    // })
    //-------------------------------------------------------------------------------------------------------------
    //! ----------   Тут використати цикл for..of  -----------
    //*4.Дано масив елементів. Вивести на екран елементи, що більші за 100
    // const array = [
    //   17, 143, 62, 198, 5, 87, 121, 34, 176, 93, 11, 155, 48, 200, 72, 109, 26, 164, 81, 137,
    // ]
    // let resultHTML = ''
    // for (const element of array) {
    //   resultHTML += element > 100 ? `<p>${element}</p>` : ''
    // }
    // document.write(resultHTML)
    //-------------------------------------------------------------------------------------------------------------
    //*Дано масив елементів. Знайти добуток додатних елементів
    // const array = [
    //   -17, 43, -62, 98, 5, -87, 121, -34, 76, -93, 11, -155, 48, -200, 72, -109, 26, -64, 81, -137,
    // ]
    // let sum = 0
    // for (const element of array) {
    //   if (element > 0) sum += element
    // }
    // console.log(sum)
    //-------------------------------------------------------------------------------------------------------------
    //! ----------   Тут використати методи масивів  -----------
    //*6.Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2
    // const array = [
    //   45, -17, 82, 12, 103, -56, 45, 91, -8, 67, 23, 150, -34, 46, 0, 120, 39, -75, 45, 200,
    // ]
    // const firstEl = array[0]
    // array.forEach((el, index, targetArray) => {
    //   if (el > firstEl) targetArray[index] *= 2
    // })
    // console.log(array)
    //-------------------------------------------------------------------------------------------------------------
    //*7.Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.
    // const prices = [
    //   450, 1250, 890, 2300, 1000, 1750, 320, 4500, 760, 1100, 999, 2800, 150, 3600, 1020, 540, 1999,
    //   700, 5200, 1350,
    // ]
    // const discount = 0.3
    // const refPrice = 1000
    // prices.forEach((price, index, targetArray) => {
    //   if (price > refPrice) targetArray[index] = price * (1 - discount)
    // })
    // console.log(prices)
    //-------------------------------------------------------------------------------------------------------------
    //*8.Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»
    // const carNumbers = [
    //   'AA1234BC',
    //   'BC5678AA',
    //   'AB9012CD',
    //   'KA3456BM',
    //   'AC7890HE',
    //   'BH2345KT',
    //   'AE6789OP',
    //   'CE1122AB',
    //   'AX4567MP',
    //   'BK8901HC',
    //   'AT2345CB',
    //   'HH6789AA',
    //   'AM1234KE',
    //   'CX5678BT',
    //   'AI9012HP',
    //   'BE3456AK',
    //   'AO7890CM',
    //   'KT1122AB',
    //   'AP4567BK',
    //   'CH8901AE',
    // ]
    // Варіант 1
    // const carNumbersStartingWithA = carNumbers.filter((carNumber) => carNumber[0] === 'A')
    // console.log(carNumbersStartingWithA)
    // Варіант 2
    // const carNumbersStartingWithA = []
    // for (const carNumber of carNumbers) {
    //   if (carNumber.startsWith('A')) {
    //     carNumbersStartingWithA.push(carNumber)
    //   }
    // }
    // console.log(carNumbersStartingWithA)
    //-------------------------------------------------------------------------------------------------------------
    //*9. Дано масив імен. Сформувати масив з перших літер цих імен.
    // const names = [
    //   'Олександр',
    //   'Марія',
    //   'Андрій',
    //   'Катерина',
    //   'Вікторія',
    //   'Дмитро',
    //   'Анна',
    //   'Максим',
    //   'Олена',
    //   'Іван',
    //   'Анастасія',
    //   'Богдан',
    //   'Софія',
    //   'Артем',
    //   'Наталія',
    //   'Михайло',
    //   'Юлія',
    //   'Володимир',
    //   'Дарина',
    //   'Роман',
    // ]
    // const firstLettersOfNames = names.map((name) => name[0])
    // console.log(firstLettersOfNames)
    //-------------------------------------------------------------------------------------------------------------
    //*10. Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.
    // const prices = [
    //   450, 1250, 890, 2300, 1000, 1750, 320, 4500, 760, 1100, 999, 2800, 150, 3600, 1020, 540, 1999,
    //   700, 5200, 1350,
    // ]
    // const taxRate = 0.2
    // const taxAmounts = prices.map((price) => price * taxRate)
    // console.log(taxAmounts)
}
