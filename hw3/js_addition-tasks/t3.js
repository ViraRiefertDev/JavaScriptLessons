'use strict'

//Комп’ютер загадує число від 1 до 10. Двоє користувачів надають свої відповіді.
// Виграє той, у кого число знаходиться ближче до загаданого комп’ютером числа.

const MAX_NUMBER = 10
const MIN_NUMBER = 1

const gameStart = confirm(
  `Давай пограємо!\nКомп’ютер загадує число від ${MIN_NUMBER} до ${MAX_NUMBER}.\nДвоє користувачів надають свої відповіді.\nВиграє той, у кого число знаходиться ближче до загаданого комп’ютером числа.\nПочинаємо гру?`,
)

if (gameStart) {
  const randomNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER
  const user1Answer = parseInt(prompt('Користувач 1, твій хід: ', 2))
  const user2Answer = parseInt(prompt('Користувач 2, твій хід: ', 4))

  if (Number.isFinite(user1Answer) && Number.isFinite(user2Answer)) {
    const distance1 = Math.abs(randomNumber - user1Answer)
    const distance2 = Math.abs(randomNumber - user2Answer)
    const infoMessage = `Загадане число було ${randomNumber}`
    if (distance1 > distance2) {
      alert(`Виграв користувач 2. ${infoMessage}`)
    } else if (distance1 < distance2) {
      alert(`Виграв користувач 1. ${infoMessage}`)
    } else {
      alert(
        `Ваші відповіді знаходяться на однаковій відстані від числа, загаданого комп'ютером. ${infoMessage}`,
      )
    }
  } else {
    alert('Ви ввели не числа! не мухлюйте я все бачу!!')
  }
} else alert('До побачення!')
