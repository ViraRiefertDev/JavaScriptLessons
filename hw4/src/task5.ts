// Задача 2. Створити 10 елементів для введення цін продуктів

if (confirm('Почати тестування?')) {
  const inputElementCount = 10
  let resultHTML = `<form action="#">`

  for (let i = 1; i <= inputElementCount; i++) {
    resultHTML += `
    <p>
    <label>
      <span>Product #${i}</span>
      <input type="number" min="0" step="0.01">
    </label>
    </p>`
  }
  resultHTML += `</form>`
  document.write(resultHTML)
}
