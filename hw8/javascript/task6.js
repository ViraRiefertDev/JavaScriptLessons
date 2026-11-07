"use strict";
//Задача 6. Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).
// Приклад збереження даних
// let productsPrices = [1000, 20, 31]
// let productsTitles = [‘cheese', ‘juice', ‘bread']
if (confirm('Почати тестування?')) {
    function getAffordableProducts(productsPrices, productsTitles, moneyAmount) {
        const availableProducts = [];
        for (let i = 0; i < productsPrices.length; i++) {
            if (productsPrices[i] <= moneyAmount) {
                availableProducts.push(productsTitles[i]);
            }
        }
        return availableProducts;
    }
    const productsPrices = [1000, 20, 31];
    const productsTitles = ['cheese', 'juice', 'bread'];
    const moneyArray = [100, 2000, 10, 20];
    function showAvailableProducts(productsPrices, productsTitles, moneyArray) {
        let resultHtml = '';
        for (let i = 0; i < moneyArray.length; i++) {
            const availableProducts = getAffordableProducts(productsPrices, productsTitles, moneyArray[i]);
            resultHtml += `<p>Маючи ${moneyArray[i]} грн, користувач може придбати ${availableProducts.toString() || 'нічого'}</p>
    <hr>`;
        }
        document.write(resultHtml);
    }
    showAvailableProducts(productsPrices, productsTitles, moneyArray);
}
