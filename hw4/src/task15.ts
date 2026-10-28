if (confirm('Почати тестування?')) {
  //Задача 12.
  // Ігровий автомат. Випадково вибираємо зображення у 3 позиціях.
  // Вибір у кожній позиції вибирається як одне з чотирьох зображень.
  // Вивести ці зображення і повідомити виграш користувача
  // (три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн).
  // Використати цикли і switch (для вибору зображення за номером).

  const img1Src = '../img/lemon.jpg'
  const img2Src = '../img/cherry.png'
  const img3Src = '../img/water-melone.png'
  const img4Src = '../img/diamant.png'
  const countOfSlots = 3
  const countOfImages = 4
  let resultHtml = `<div style="display: flex; gap: 5px; width: fit-content; border: 3px solid black; padding: 5px;">`
  let score = 0
  let firstImageNumber = 0
  let areAllImagesSame = true
  for (let i = 0; i < countOfSlots; i++) {
    const randomNumber = Math.floor(Math.random() * countOfImages) + 1
    if (!firstImageNumber) {
      firstImageNumber = randomNumber
    }
    let imgSrc = ''
    switch (randomNumber) {
      case 1:
        imgSrc = img1Src
        break
      case 2:
        imgSrc = img2Src
        break
      case 3:
        imgSrc = img3Src
        break
      case 4:
        imgSrc = img4Src
        break
    }
    resultHtml += ` <img src="${imgSrc}" style="width: 100px; height: 100px; object-fit: contain;">`
    if (areAllImagesSame && firstImageNumber !== randomNumber) {
      areAllImagesSame = false
    }
  }

  resultHtml += `</div>`

  if (areAllImagesSame) {
    switch (firstImageNumber) {
      case 1:
        score = 100
        break
      case 2:
        score = 200
        break
      case 3:
        score = 500
        break
      case 4:
        score = 1000
        break
    }
    resultHtml += `<div>Ви виграли ${score}грн</div>`
  } else {
    resultHtml += `На жаль, ви не виграли`
  }
  document.write(resultHtml)
}
