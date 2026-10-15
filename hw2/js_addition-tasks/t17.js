"use strict"

// Зашифрувати один введений англійський символ у верхньому регістрі (один з символів: A,B,…Z)  
// методом зміщення (шифр Цезаря)
const startCharCode = 65
const endCharCode = 90
const alphabetLength = endCharCode - startCharCode + 1
const shift = 3
const char = prompt('Введіть англійський символ у верхньому регістрі (один з символів: A,B,…Z)', 'Z')

const charCode = char.charCodeAt(0)

const newCharCode = (charCode + shift - startCharCode) % alphabetLength + startCharCode 

const newChar = String.fromCharCode(newCharCode)

document.write(`
  <p>${char} -> ${newChar}</p>
  `)