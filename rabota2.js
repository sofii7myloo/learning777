let x= +prompt('Введите x')
let y= +prompt('Введите y');
let c= +prompt('Введите c');
let d= +prompt('Введите d');

let e;

if (x*y > 3) {
    e = Math.max(Math.pow(x, 3), Math.pow(Math.log10(x*y), c) * d);
}
else if (x*y >= 0 && x*y <= 3) {
    e = 3 * Math.min(x, y, Math.max(c * x, d * y));
}
else if (x*y < 0) {
    e = 2 * c * d - x;
}
alert(`Результат: e=${e}`);