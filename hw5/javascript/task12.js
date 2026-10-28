"use strict";
if (confirm('Почати тестування?')) {
    //Задача 9. Користувач загадує число. Комп’ютер задає питання поки не вгадає число користувача (використати confirm).
    const gameStart = confirm('Пограємо в гру вгадай число?\n Якщо будеш чесним, гарантую що вгадаю число не більше ніж за 7 спроб)\nЗагадайте число від 1 до 100');
    if (gameStart) {
        let maxNumber = 100;
        let minNumber = 1;
        let resultMsg = '';
        let isCorrectNumber = false;
        let computerNumber = Math.ceil((minNumber + maxNumber) / 2);
        let attemptCount = 0;
        do {
            attemptCount++;
            isCorrectNumber = confirm(`Це число ${computerNumber}?`);
            if (isCorrectNumber) {
                resultMsg = `Ура вгадав! за ${attemptCount} спроб`;
            }
            else {
                if (minNumber >= maxNumber) {
                    break;
                }
                const isNumberGreater = confirm(`Ваше число більше за ${computerNumber}? `);
                if (isNumberGreater) {
                    minNumber = computerNumber + 1;
                }
                else {
                    maxNumber = computerNumber - 1;
                }
                computerNumber = Math.ceil((minNumber + maxNumber) / 2);
            }
        } while (!isCorrectNumber);
        if (!resultMsg) {
            resultMsg =
                'На жаль не вгадав. Але Ви відповідали не чесно.. Не треба обманювати машину, в нас також є почуття';
        }
        document.write(resultMsg);
    }
    else
        document.write('До побачення!');
}
