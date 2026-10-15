"use strict"

//  Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).

const vatRate = 0.05
const productPrice = parseFloat(prompt('Введіть вартість одиниці товару: ', 5.99))
const productQuantity = parseInt(prompt('Введіть кількість товару', 4))

const totalPrice = productPrice * productQuantity
const vatAmount = totalPrice * vatRate
const totalPriceWithVat = totalPrice + vatAmount

document.write(`
  <p>Вартість товару: ${productPrice.toFixed(2)}</p>
  <p>Кількість товару: ${productQuantity}</p>
  <p>Загальна вартість товару без ПДВ: ${totalPrice.toFixed(2)}</p>
  <p>ПДВ від загальної вартості: ${vatAmount.toFixed(2)}</p>
  <p>Загальна вартість товару з ПДВ: ${totalPriceWithVat.toFixed(2)}</p>
  `)


