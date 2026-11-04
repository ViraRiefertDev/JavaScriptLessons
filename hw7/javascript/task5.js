"use strict";
// Задача 5. Створити окремі функції, які переводять:
// Сантиметри у дюйми;
// Кілограми у фунти;
// Кілометри у милі.
if (confirm('Почати тестування?')) {
    const CM_PER_INCH = 2.54;
    const POUNDS_PER_KG = 2.20462;
    const KM_PER_MILE = 1.609344;
    const convertCmToInches = (centimeters) => centimeters / CM_PER_INCH;
    const convertKgToPounds = (kilograms) => kilograms * POUNDS_PER_KG;
    const convertKmToMiles = (kilometers) => kilometers / KM_PER_MILE;
    const kg = 10;
    const cm = 100;
    const km = 10;
    const inches = convertCmToInches(cm);
    const pounds = convertKgToPounds(kg);
    const miles = convertKmToMiles(km);
    document.write(`
    <p>${cm} cm -> ${inches.toFixed(2)} inches</p>
    <p>${kg} kg -> ${pounds.toFixed(2)} pounds</p>
    <p>${km} km -> ${miles.toFixed(2)} miles</p>
    `);
}
