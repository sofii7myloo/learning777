const a = 0.1;
const b = 1.5;
const h = 0.1;
// 0.1 - начало отрезка
// 1.5 - конец отрезка
// 0.1 - шаг

// создаём функцию 
function f(x) {
    return Math.sin(x) + Math.cos(x);
    // return возвращает значение функции
}
console.log ("x\t\ty = f(x)");
// /t - для выравнивания таблицы
console.log ("...................");
for (let x = a; x <= b + 0.0001; x += h) {
    // 0.0001 - для минимизации погрешности

const y = f(x);
// вызываем функцию f(x)

console.log(x.toFixed(1) + "\t\t" + y.toFixed(6))
}
// x.toFixed(1) - округление х
// x.toFixed(6) - округление y
