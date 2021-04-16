// Ex1
console.log('Ex1 ------------------------------------------')

const filArray = () => {
    let arr = new Array(1000);
    for (var i = 0; i < 1000; i++) {
        arr[i] = i + 1;
    }
    return arr;
}

let arr = filArray();
console.log(arr);


// Ex2
console.log('Ex2 -------------------------------------------');
console.log('a. ----------------------');
function isEvenAndAliquotBy10Nums(element, index, array) {
    return (element % 2 === 0) && (element % 10 === 0);
}
function getEvenAndAliquotBy10Array(arr) {
    return arr.filter(isEvenAndAliquotBy10Nums);
}
console.log(getEvenAndAliquotBy10Array(arr));

console.log('b. ----------------------');

let compareFunc = (a, b) => {
    if (a > b) return -1;
    else if (a < b) return 1
    return 0;
}
//arr.sort((a, b) => b - a);
function isOddAndAliquotBy3And5Nums(element, index, array) {
    return (element % 2 !== 0) && (element % 3 === 0) && (element % 5 === 0);
}

function getArrayForEx2PartB(arr) {
    return arr.filter(isOddAndAliquotBy3And5Nums).sort(compareFunc);
}
console.log(getArrayForEx2PartB(arr));


//Ex3
console.log('Ex3 -------------------------------------------');

let getSameStrs = (firstArr, secondArr) => {
    let index = -1;
    let resultArr = [];
    for (i = 0; i < secondArr.length; i++) {

        if (firstArr.includes(secondArr[i]) && !(resultArr.includes(secondArr[i]))) {

            resultArr[index += 1] = secondArr[i];
        }
    }
    return resultArr;
}

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

console.log(getSameStrs(student1Courses, student2Courses));
