"use strict";
// Дано масив, який містить оцінки з К предметів.
// Знайти середній бал і з’ясувати до якої категорії він відноситься
// (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно),
// трійочник(є хоча би одна трійка)).
if (confirm('Почати тестування?')) {
    function getAverageGrade(gradesArray) {
        let gradesSum = 0;
        for (let i = 0; i < gradesArray.length; i++) {
            gradesSum += gradesArray[i];
        }
        return gradesSum / gradesArray.length;
    }
    function getStudentCategory(gradesArray) {
        let hasThreeGrade = false;
        let hasFourGrade = false;
        for (let i = 0; i < gradesArray.length; i++) {
            if (gradesArray[i] === 2)
                return 'двійочник';
            if (gradesArray[i] === 3)
                hasThreeGrade = true;
            else if (gradesArray[i] === 4)
                hasFourGrade = true;
        }
        if (hasThreeGrade)
            return 'трійочник';
        if (hasFourGrade)
            return 'хорошист';
        return 'відмінник';
    }
    function showStudentStats(gradesArray) {
        const averageGrade = getAverageGrade(gradesArray);
        const studentCategory = getStudentCategory(gradesArray);
        document.write(`
      <p>${averageGrade.toFixed(2)} - ${studentCategory}</p>
      `);
    }
    // 1. Відмінник — усі п'ятірки
    const grades1 = [5, 5, 5, 5, 5];
    // 2. Хорошист — четвірки та п'ятірки
    const grades2 = [4, 5, 4, 5, 4];
    // 3. Хорошист — усі четвірки
    const grades3 = [4, 4, 4, 4];
    // 4. Трійочник — є одна трійка
    const grades4 = [5, 5, 3, 5, 4];
    // 5. Трійочник — усі трійки
    const grades5 = [3, 3, 3, 3];
    // 6. Двійочник — є одна двійка
    const grades6 = [5, 5, 5, 2, 5];
    // 7. Двійочник — є і двійка, і трійка
    const grades7 = [5, 4, 3, 2, 5];
    // 8. Двійочник — усі двійки
    const grades8 = [2, 2, 2, 2];
    // 9. Один предмет — відмінник
    const grades9 = [5];
    // 10. Один предмет — двійочник
    const grades10 = [2];
    showStudentStats(grades1);
    showStudentStats(grades2);
    showStudentStats(grades3);
    showStudentStats(grades4);
    showStudentStats(grades5);
    showStudentStats(grades6);
    showStudentStats(grades7);
    showStudentStats(grades8);
    showStudentStats(grades9);
    showStudentStats(grades10);
}
