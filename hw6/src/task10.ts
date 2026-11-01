// Вивести на екран
// 1 1
// 2 1234
// 3 123456789
// 4 1234…16
// 5 1 … 25
// 6 1…36

if (confirm('Почати тестування?')) {
  const maxNumber = 6
  let resultHtml = '<p>'
  for (let i = 1; i <= maxNumber; i++) {
    resultHtml += `${i} `
    const squaredNumber = i ** 2
    for (let j = 1; j <= squaredNumber; j++) {
      resultHtml += `${j}`
    }
    resultHtml += `<br>`
  }
  resultHtml += `</p>`

  document.write(resultHtml)
}
