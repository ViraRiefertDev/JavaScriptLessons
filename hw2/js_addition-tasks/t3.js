"use strict"

// З клавіатури вводяться вартість одиниці та кількість одиниць двох товарів. 
// Вивести на екран вартість кожного з видів товарів окремо і загальну вартість.

const product1Price = parseFloat(prompt('Введіть вартість одиниці 1 товару: ', 140.99))
const product1Quantity = parseInt(prompt('Введыть кількість одиниць 1 товару', 5))

const product2Price = parseFloat(prompt('Введіть вартість одиниці 2 товару: ', 237.99))
const product2Quantity = parseInt(prompt('Введыть кількість одиниць 2 товару', 2))

const product1TotalPrice = product1Price * product1Quantity
const product2TotalPrice = product2Price * product2Quantity

const totalPrice = product1TotalPrice + product2TotalPrice

document.write(`
  <p>Загальна вартість першого виду товару: ${product1TotalPrice.toFixed(2)} грн</p>
  <p>Загальна вартість другого виду товару: ${product2TotalPrice.toFixed(2)} грн</p>
  <p>Загальна вартість: ${totalPrice.toFixed(2)} грн</p>
  `)
