function calculateFunction(x) {
    return 3 * Math.pow(Math.cos(2 * x + 1), 2);
}
function buildFunctionTable(a, b, h) {
    console.log("Таблица значений функции y = 3 * cos²(2 * x + 1)");
    // toFixed - ограничивает количество знаков после запятой
    console.log(Отрезок: [$(a.toFixed(4)}, ${b.toFixed(4)}], шаг: ${h.toFixed(4)});
    concole.log("☆-☆-☆-☆-☆-☆-☆-☆-☆-☆-☆-☆-☆-☆-☆-☆-☆-☆")
    console.log("    x    |    y    ");
    console.log("_______");

    // добавим малое число чтобы минимизировать погрешность
    for (let x = a; x <= b + 0.0001; x += h) {
        const y = calculateFunction(x);
        console.log(${x.toFixed(6).padEnd(10)} | ${y.toFixed(6)});
    }
}
// параметры задания
const a = -Math.PI; // начало отрезка -п
const b = Math.PI; // конец отрезка п
const h = Math.PI / 8; // шаг п/8

// строим таблицу
buildFunctionTable(a, b, h);