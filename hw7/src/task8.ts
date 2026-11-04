// Задача 8. Створити функцію, яка виводить банер (у функцію передаються:
// зображення, заголовок та посилання, куди переходимо при кліку на зображення
// (тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>

if (confirm('Почати тестування?')) {
  const createBanner = (imageUrl: string, title: string, href: string): string => `<h1>${title}</h1>
      <a target="_blank" href="${href}"><img width='200' height='200' src="${imageUrl}" alt = "${title}"></a>`

  const showBanner = (imageUrl: string, title: string, href: string): void => {
    document.write(createBanner(imageUrl, title, href))
  }

  const imageUrl = 'https://pipmy.ru/upload/021/u2127/a/8/a8a3756f.jpg'
  const title = 'Doggy dog'
  const href = 'https://pipmy.ru/3183-sobachka-avtor-neizvesten.html'
  showBanner(imageUrl, title, href)
}
