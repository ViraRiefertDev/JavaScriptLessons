//Задача -1. Вивести на екран номери місяців весни і літа (від 3 до 8)

if (confirm('Почати тестування?')) {
  const START_MONTH_NUMBER = 3
  const END_MONTH_NUMBER = 8

  let resultMsg = ''
  for (let i = START_MONTH_NUMBER; i <= END_MONTH_NUMBER; i++) {
    resultMsg += `${i}</br>`
  }

  document.write(`
  <p>${resultMsg}</p>
  `)
}
