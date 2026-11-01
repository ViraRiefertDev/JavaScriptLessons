//Вивести на екран усі трицифрові числа, у яких перша цифра є більшою або рівною за суму другої і третьої.
if (confirm('Почати тестування?')) {
  // 1 Варіант
  // const minNumber = 100
  // const maxNumber = 999
  // let resultHtml = `<p>`
  // for (let i = minNumber; i <= maxNumber; i++) {
  //   const firstDigit = Math.floor(i / 100)
  //   const secondDigit = Math.floor((i % 100) / 10)
  //   const thirdDigit = i % 10
  //   if (firstDigit >= secondDigit + thirdDigit) {
  //     resultHtml += `${i} `
  //   }
  // }
  // resultHtml += `</p>`
  // document.write(resultHtml)

  // 2 Варіант
  let resultHtml = `<p>`
  for (let i = 1; i <= 9; i++) {
    for (let j = 0; j <= i; j++) {
      for (let k = 0; k <= i - j; k++) {
        resultHtml += `${i}${j}${k} `
      }
    }
  }
  resultHtml += `</p>`
  document.write(resultHtml)
}
