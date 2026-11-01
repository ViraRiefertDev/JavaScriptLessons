// Інвестор вклав S тис. грн на 20 років під 20% річних, податок складає 5% від суми прибутку(щорічно).
// Визначити за допомогою циклів суму, яку він одержить.

if (confirm('Почати тестування?')) {
  const initialInvestment = parseFloat(
    prompt(`Введіть кількість грошей (тис.) для вкладу: `, '10') ?? '10',
  )
  const investmentYears = 20
  const annualInterestRate = 0.2
  const profitTaxRate = 0.05
  let totalAmount = initialInvestment
  for (let year = 1; year <= investmentYears; year++) {
    const annualProfit = totalAmount * annualInterestRate
    const taxAmount = annualProfit * profitTaxRate
    totalAmount += annualProfit - taxAmount
  }
  document.write(
    `Вклавши ${initialInvestment} тис грн інвестор отримує після ${investmentYears} років з урахуванням щорічного налогу в ${profitTaxRate * 100}%: ${totalAmount.toFixed(2)} тис грн`,
  )
}
