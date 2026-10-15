"use strict"

// Дано три дійсні змінні a, b і c.  
// Скласти  алгоритм, який міняє місцями значення цих змінних наступним чином: 
// змінна a набуває значення змінної b, змінна b набуває значення змінної c, 
// а змінна  c – попереднє значення змінної a.

let a = parseFloat(prompt('Введіть а: ', 10))
let b = parseFloat(prompt('Введіть b: ', 20))
let c = parseFloat(prompt('Введіть c: ', 30))

const temp = a
a = b
b = c
c = temp

document.write(`
  <p>a:${a}</p>
  <p>b:${b}</p>
  <p>c:${c}</p>
  `)
