export function convertFromStrToMathArray(expression) {
    let dilimiters = ['(', ')', '*', '/', '+', '-', '^'];
    let expressionArray = [];
    let i = 0;
    for (let index = 0; index < expression.length; index++) {
        if (isNumber(expression[index])) {
            expressionArray[i] = expression[index];
            while (isNumber(expression[index+1]) || (expression[index + 1] === '.' && (isNumber(expression[index+2])))) {
                expressionArray[i] += expression[index + 1];
                index++;
            }
        } else if (expression[index] === " ") {
            continue;
        } else if (dilimiters.includes(expression[index])) {
            expressionArray[i] = expression[index];
        } else {
            throw new Error('Incorrect input. Be careful');
        }
        i++;
    }
    return expressionArray;
}

function isNumber(elem) {
    if (elem === " ") {
        return false;
    }
    return !isNaN(elem);
}
export function convertFromMathArrayToStr(arr) {
    let str = "";
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === '(') {
            if ((arr[index - 1] === ')') === false) {
                str += " ";
            }
            str += arr[index];
            while (arr[index + 1] === '(') {
                str += arr[index + 1];
                index++;
            }
        } else if (arr[index] === ')') {
            str += arr[index];
            while (arr[index + 1] === ')') {
                str += arr[index + 1];
                index++;
            }
        } else if (arr[index] === '^') {
            str += `<sup>`
            if (arr[index + 1] === '(') {
                do {
                    str += `${arr[index + 1]}`;
                    index++;
                } while (arr[index] !== ')');
            } else {
                str += `${arr[index + 1]}`;
                index++;
            }
            str += `</sup>`;
        } else {
            if ((arr[index - 1] === '(') === false)
                str += " ";
            str += arr[index];
        }
    }
    return str;
}