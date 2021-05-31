export function power(subExpression, index) {
    subExpression[index] = Math.pow(+subExpression[index], +subExpression[index + 2]);
    subExpression.splice(index + 1, 2);
    return subExpression;
}

export function multOrDivide(subExpression, index) {
    if (subExpression[index + 1] === '*') {
        subExpression[index] = +subExpression[index] * +subExpression[index + 2];
        subExpression.splice(index + 1, 2);
    }
    else {
        if (+subExpression[index + 2] === 0) {
            throw new Error('Divided by zero error');
        }
        subExpression[index] = +subExpression[index] / +subExpression[index + 2];
        subExpression.splice(index + 1, 2);
    }
    return subExpression;
}

export function sumOrMinus(subExpression, index) {
    if (subExpression[index + 1] === '+') {
        subExpression[index] = +subExpression[index] + +subExpression[index + 2];
        subExpression.splice(index + 1, 2);
    }
    else {
        subExpression[index] = +subExpression[index] - +subExpression[index + 2];
        subExpression.splice(index + 1, 2);
    }
    return subExpression;
}