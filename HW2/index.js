let ex1 = '1' === 1; // false
let ex2 = '2.0' == '2'; // false
let ex3 = '2.0' === '2.00'; // false
let ex4 = '2.0' == Number('2'); // true
let ex5 = 2 == String(2); // true
let ex6 = !!('2') === true; // true
let ex7 = !(false) && 'asd' || null; // asd
let ex8 = (null == undefined) || (null >= undefined) || (null !== 0); // true
let ex9 = 3 + null + '2' + true; // 32true
let ex10 = 'true' > !Boolean('true'); // false
let ex11 = ('Sasha' + Number('2')) === ('Sasha' + Number(2.0)); // true
let ex12 = Boolean(String(Number(true + 'false'))) > 1; // false


console.log(ex1);
console.log(ex2);
console.log(ex3);
console.log(ex4);
console.log(ex5);
console.log(ex6);
console.log(ex7);
console.log(ex8);
console.log(ex9);
console.log(ex10);
console.log(ex11);
console.log(ex12);