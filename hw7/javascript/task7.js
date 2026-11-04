"use strict";
//Задача 7. Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень
// (шляхи до зображень передаються у функцію)
if (confirm('Почати тестування?')) {
    const picture1 = 'https://pipmy.ru/upload/021/u2127/a/8/a8a3756f.jpg';
    const picture2 = 'https://sobakovod.club/uploads/posts/2021-12/1640829612_1-sobakovod-club-p-sobaki-samikh-populyarnikh-sobachek-1.jpg';
    const picture3 = 'https://cs9.pikabu.ru/post_img/big/2017/09/20/6/1505895070190915071.jpg';
    const picture4 = 'https://kuda-spb.ru/uploads/e39288a27ef3064084ae76f126ec25f6.jpg';
    const getRandomUrl = (url1, url2, url3, url4) => {
        const randomNumber = Math.floor(Math.random() * 4) + 1;
        switch (randomNumber) {
            case 1:
                return url1;
            case 2:
                return url2;
            case 3:
                return url3;
            default:
                return url4;
        }
    };
    const createImgTag = (url) => `<img src='${url}' alt='Picture'>`;
    const showRandomPicture = (url1, url2, url3, url4) => {
        const randomUrl = getRandomUrl(url1, url2, url3, url4);
        const imgTag = createImgTag(randomUrl);
        document.write(imgTag);
    };
    showRandomPicture(picture1, picture2, picture3, picture4);
}
