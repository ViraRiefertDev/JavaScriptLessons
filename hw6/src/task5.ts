//Інвестор вклав S  тис. грн на 20 років під 20% річних.
// Визначити за допомогою циклів суму, яку він одержить (без оподаткування).
if (confirm('Почати тестування?')) {
  const initialInvestment = parseFloat(
    prompt(`Введіть кількість грошей (тис.) для вкладу: `, '10') ?? '10',
  )
  const investmentYears = 20
  const annualInterestRate = 0.2
  let totalAmount = initialInvestment
  for (let year = 1; year <= investmentYears; year++) {
    totalAmount += totalAmount * annualInterestRate
  }
  document.write(
    `Вклавши ${initialInvestment} тис грн інвестор отримує після ${investmentYears} років ${totalAmount.toFixed(2)} тис грн`,
  )
}
