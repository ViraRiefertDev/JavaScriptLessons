'use strict'

// З клавіатури вводиться перша літера розширення файлу («html», «doc», «jpeg», «mp3», «xls»).
// Вивести на екран назву програми, яка може відкрити цей тип файлу.

const firstLetterOfTheFileExtension = prompt(
  'Введіть першу літеру розширення файлу («html», «doc», «jpeg», «mp3», «xls»)',
)
if (firstLetterOfTheFileExtension && firstLetterOfTheFileExtension.trim()) {
  const firstLetterOfTheFileExtensionFormatted = firstLetterOfTheFileExtension
    .trim()
    .toLowerCase()[0]
  let programName
  switch (firstLetterOfTheFileExtensionFormatted) {
    case 'h':
      programName = 'Google Chrome'
      break
    case 'd':
      programName = 'Microsoft Word'
      break
    case 'j':
      programName = 'Microsoft Paint'
      break
    case 'm':
      programName = 'VLC Media Player'
      break
    case 'x':
      programName = 'Microsoft Excel'
      break
    default:
      programName = 'program is not found'
  }

  document.write(`
  <p>${firstLetterOfTheFileExtensionFormatted}</p>
  <p>Програма називається: ${programName}</p>
  `)
}
