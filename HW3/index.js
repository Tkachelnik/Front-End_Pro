console.log('Ex1');
let a = 10, b = 3, c = 5;
if (a <= b) {
    if (b <= c) {
        console.log(a, b, c);
    } else if (a <= c) {
        console.log(a, c, d);
    } else {
        console.log(c, a, b)
    }
} else if (c <= b) {
    console.log(c, b, a);
} else if (a <= c) {
    console.log(b, a, c);
} else {
    console.log(b, c, a);
}

console.log('Ex2');
let temp = 273.15, unit = 'f', F, C, K;
if (unit == 'f') {
    F = temp;
    C = (F - 32) * 5 / 9;
    K = C + 273.15;
} else if (unit == 'c') {
    C = temp;
    F = (C * 9 / 5) + 32;
    K = C + 273.15;
} else if (unit == 'k') {
    K = temp;
    C = K - 273.15;
    F = (C * 9 / 5) + 32;
} else {
    F = 'NaN';
    K = 'NaN';
    C = 'NaN';
}
console.log('C = ',C,"; K = ", K,'; F = ', F);
