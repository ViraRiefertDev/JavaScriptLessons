"use strict"

//  З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. 
// Обчислити вартість кожного товару окремо та загальну вартість. 
// Вивести чек (як у супермаркеті) використовуючи елементи розмітки.

const product1Price = parseFloat(prompt('Введіть вартість товару 1: ', 3.99))
const product1Quantity = parseInt(prompt('Введіть кількість одиниць товару 1: ', 5))

const product2Price = parseFloat(prompt('Введіть вартість товару 2: ', 5.99))
const product2Quantity = parseInt(prompt('Введіть кількість одиниць товару 2: ', 2))

const product3Price = parseFloat(prompt('Введіть вартість товару 3: ', 14.99))
const product3Quantity = parseInt(prompt('Введіть кількість одиниць товару 3: ', 1))

const product1TotalPrice = product1Price * product1Quantity
const product2TotalPrice = product2Price * product2Quantity
const product3TotalPrice = product3Price * product3Quantity

const totalPrice = product1TotalPrice + product2TotalPrice + product3TotalPrice

document.write(`
  <h2>🛒 Чек супермаркету</h2>
  <hr>

  <table cellpadding='10'>
    <thead>
      <tr>
        <th style="text-align: left;">Товар</th>
        <th>Ціна</th>
        <th>Кількість</th>
        <th>Сума</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Товар 1</td>
        <td>${product1Price.toFixed(2)}</td>
        <td>${product1Quantity}</td>
        <td>${product1TotalPrice.toFixed(2)}</td>
      </tr>
      <tr>
        <td>Товар 2</td>
        <td>${product2Price.toFixed(2)}</td>
        <td>${product2Quantity}</td>
        <td>${product2TotalPrice.toFixed(2)}</td>
      </tr>
      <tr>
        <td>Товар 3</td>
        <td>${product3Price.toFixed(2)}</td>
        <td>${product3Quantity}</td>
        <td>${product3TotalPrice.toFixed(2)}</td>
      </tr>
    </tbody>
    <tfoot>
  <tr>
    <th>Разом до сплати:</th>
    <td></td>
    <td></td>
    <th>${totalPrice.toFixed(2)}</th>
  </tr>
</tfoot>
  </table>

  <hr>
  <p>Дякуємо за покупку!</p>
`)