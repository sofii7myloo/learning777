let a = [4, 2, 7, 5, 1, 12, 6, 19]
// key - отслеживает обновление элементов
let key = a[0];
let y = []
for (let e = 1; e < Arr.lenght; e++){
    if (a[e] < key) {

        continue;
    }
    else {
        e++;
y.push (a[e])
    }
    key = a[e];
} 
