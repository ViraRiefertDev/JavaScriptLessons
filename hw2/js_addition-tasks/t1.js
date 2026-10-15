"use strict"

// Дано ширину екрана та кількість елементів, які повинні бути відображені у рядку. Визначити ширину елементів, які повинні бути відображені у цьому рядку. 

const viewportWidth = parseFloat(prompt('Введіть ширину екрану: ', 1200))
const elementCount = parseInt(prompt('Введіть кількість елементів: ', 3))

const elementWidth = viewportWidth / elementCount

document.write(`
  <p>Ширина екрана: ${viewportWidth}</p>
  <p>Кількість елементів: ${elementCount}</p>
  <p>Ширина елемента: ${elementWidth.toFixed(2)}px</p>
  `)