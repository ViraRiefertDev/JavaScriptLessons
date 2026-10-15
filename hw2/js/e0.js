"use strict"

// Задача 0. Обчислити значення виразів
// S1=a+12+b
// S2=a+b2a 
// S3=3(a+b)c 
// S4=sin⁡(a-b) 

const a = parseFloat(prompt('Введіть а: ', 1))
const b = parseFloat(prompt('Введіть b: ', 1))
const c = parseFloat(prompt('Введіть c: ', 1))

const s1 = a + 12 + b
const s2 = Math.pow(((a + b) / (2 * a)), 1 / 2)
const s3 = Math.pow(((a + b) * c), 1 / 3)
const s4 = Math.sin(a / (-b))

document.write(`
  <p>a = ${a.toFixed(2)}</p>
  <p>b = ${b.toFixed(2)}</p>
  <p>c = ${c.toFixed(2)}</p>
  <p>S1=a+12+b = ${s1.toFixed(2)}</p>
  <p>S2=((a+b)/2a)^(1/2) = ${s2.toFixed(2)}</p>
  <p>S3=((a+b)*c)^(1/3) = ${s3.toFixed(2)}</p>
  <p>S4=sin(a/(-b)) = ${s4.toFixed(2)}</p>
  `)