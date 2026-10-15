"use strict"

//  Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.
const cmPerM = 100,
      mPerKm = 1000

const lengthInCm = parseInt(prompt('Введіть довжину у см: ', 422120))
const lengthInM = lengthInCm / cmPerM
const lengthInKm = lengthInM / mPerKm

document.write(`
    <p>Довжина у см: ${lengthInCm}</p>
    <p>Довжина у м: ${lengthInM.toFixed(2)}</p>
    <p>Довжина у км: ${lengthInKm.toFixed(2)}</p>
  `)