//12. Написати програму виведення на екран кожного символу латинського алфавіту та поруч з кожним з них символу,
//що передує йому та що слідує за ним.

if (confirm('Почати тестування?')) {
  const firstCharCode = 65
  const lastCharCode = 90
  let resultHtml = '<div>'
  for (let charCode = firstCharCode; charCode <= lastCharCode; charCode++) {
    let prevChar
    let nextChar
    const currentChar = String.fromCharCode(charCode)
    if (charCode > firstCharCode) {
      prevChar = String.fromCharCode(charCode - 1)
    }
    if (charCode < lastCharCode) {
      nextChar = String.fromCharCode(charCode + 1)
    }
    resultHtml += `<p>${prevChar ?? ' '} - ${currentChar} - ${nextChar ?? ' '}</p>`
  }

  resultHtml += '</div>'
  document.write(resultHtml)
}
