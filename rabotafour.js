// создаём функцию для вычисления площади круга по формуле: S = π * d² / 4
function calculateCircleArea(diameter) {
    return Math.PI * Math.pow(diameter, 2) / 4; // return возвращает результат вычислений
}
// функция для вычисления площади 3-х кругов
function main() {
    // запрос диаметра кругов
    const d1 = parseFloat(prompt("введите диаметp первого круга (d1):"));
    const d2 = parseFloat(prompt("введите диаметp первого круга (d2):"));
    const d3 = parseFloat(prompt("введите диаметp первого круга (d3):"));
    // parseFloat() - преобразует текст в число с 10-ной точкой

    // вычисляем площадь
    const S1 = calculateCircleArea(d1);
    const S2 = calculateCircleArea(d2);
    const S3 = calculateCircleArea(d3);
    // const - создаём неизменную переменную

    // вывод результатов
    console.log("площади кругов:");
    console.log(`S1 = π * (${d1})² / 4 = ${S1}`);
    console.log(`S2 = π * (${d2})² / 4 = ${S2}`);
    console.log(`S3 = π * (${d3})² / 4 = ${S3}`);

//выводим результат
alert (`значения площадей: // alert - показывает всплывающее окно  с ответом
S1 = ${S1.toFixed(2)}
S2 = ${S2.toFixed(2)}
s3 = ${S3.toFixed(2)}`); // toFixed(2) - округление до 2 знаков после запятой
}

// вызываем функцию для получения результата
main();