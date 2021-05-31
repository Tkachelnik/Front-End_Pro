import * as Converter from './converter.js';
import * as MathCalculations from './math.js';

class Calculator {

    input = document.getElementById('inputArea');
    button = document.getElementById('solveBtn');

    startProgram() {
        this.button.addEventListener('click', () => this.startCalculate());
        this.input.addEventListener('input', this.updateValue.bind(this));
        this.input.addEventListener('keydown', (event) => {
            if (this.button.getAttribute('disabled') === null && event.code === 'Enter' && this.input.value.trim() !== "") {
                this.startCalculate();
            }
        });
    }

    startCalculate() {
        let expressionArray;
        let expressionWithoutBrackets;
        let finalResult;
        let expression = this.input.value;
        try {
            expressionArray = Converter.convertFromStrToMathArray(expression);
        } catch (e) {
            alert(e.message);
        }
        this.input.value = "";
        this.button.setAttribute('disabled', 'disabled');
        let expressionArray2 = expressionArray.slice();
        try {
            expressionWithoutBrackets = this.solve(expressionArray);
            finalResult = this.solveSub(expressionWithoutBrackets);
            if (finalResult === NaN) {
                throw new Error('Incorrect input')
            }
        } catch (e) {
            alert(e.message);
            return;
        }
        this.addResultToSoulutionArea(expressionArray2, finalResult);
    }

    solve(expressionArray) {
        let startBracketIndex;
        let endBracketIndex;
        let isEndBracketClosed = false;
        let isStartBracketOpened = false;
        for (let index = 0; index <= expressionArray.length; index++) {
            if (index === expressionArray.length && ((isEndBracketClosed && !isStartBracketOpened) || (!isEndBracketClosed && isStartBracketOpened))) {
                throw new Error('Incorrect input. Be careful');
            }
            if (index === expressionArray.length && !isEndBracketClosed && !isStartBracketOpened) {
                return expressionArray;
            }
            if (isEndBracketClosed && isStartBracketOpened) {
                let subExpression = [];
                let ind = 0;
                for (let i = startBracketIndex + 1; i < endBracketIndex; i++) {
                    subExpression[ind] = expressionArray[i];
                    ind++;
                }
                let result = this.solveSub(subExpression);
                let isSliced = false;

                if (+expressionArray[startBracketIndex - 1]) {
                    expressionArray[startBracketIndex + 1] = result;
                    expressionArray[startBracketIndex] = "*";
                    expressionArray.splice(startBracketIndex + 2, endBracketIndex - startBracketIndex - 1);
                    isSliced = true;
                }
                else if (expressionArray[endBracketIndex + 1] === '(' || +expressionArray[endBracketIndex + 1]) {
                    expressionArray[startBracketIndex] = result;
                    expressionArray[startBracketIndex + 1] = "*";
                    expressionArray.splice(startBracketIndex + 2, endBracketIndex - startBracketIndex - 1);
                } else {
                    expressionArray[startBracketIndex] = result;
                    expressionArray.splice(startBracketIndex + 1, endBracketIndex - startBracketIndex);
                }
                isEndBracketClosed = false;
                isStartBracketOpened = false;

                console.log('expressionArray', expressionArray);
                break;
            }
            if (expressionArray[index] === '(') {
                startBracketIndex = index;
                isStartBracketOpened = true;
            }

            if (expressionArray[index] === ')') {
                endBracketIndex = index;
                isEndBracketClosed = true;
            }
        }
        this.solve(expressionArray);
        return expressionArray;
    }
    solveSub(subExpression) {
        let dilimiters = ['+', '-', '*', '/', '^'];
        let index = 0;

        if (subExpression[index + 1] === undefined) {
            return subExpression[index];
        } else if (subExpression[index] === '-') {
            subExpression[index] += '1';
            subExpression.splice(index + 1, 0, '*');
        } else if (subExpression[index] === '+') {
            subExpression[index] = '1';
            subExpression.splice(index + 1, 0, '*');
        } else if (dilimiters.includes(subExpression[index + 2]) || subExpression[index + 1] !== undefined && subExpression[index + 2] === undefined) {
            throw new Error('Incorrect input. Be careful');
        } else if (['^'].includes(subExpression[index + 1])) {
            subExpression = MathCalculations.power(subExpression, index);
        } else if (['*', '/'].includes(subExpression[index + 1])) {
            if (['^'].includes(subExpression[index + 3])) {
                subExpression = MathCalculations.power(subExpression, index + 2);
            } else {
                subExpression = MathCalculations.multOrDivide(subExpression, index);
            }
        } else if (['+', '-'].includes(subExpression[index + 1])) {
            if (['*', '/'].includes(subExpression[index + 3])) {
                subExpression = MathCalculations.multOrDivide(subExpression, index + 2);
            } else if ('^'.includes(subExpression[index + 3])) {
                subExpression = MathCalculations.power(subExpression, index + 2);
            } else {
                subExpression = MathCalculations.sumOrMinus(subExpression, index);
            }
        }

        this.solveSub(subExpression);
        if(subExpression[index] === NaN || subExpression[index] === undefined){
            throw new Error('Incorrect input. Be careful');
        }
        return subExpression[index];
    }

    addResultToSoulutionArea(expressionArray2, finalResult) {
        let soulutionArea = document.getElementById("soulutionArea");
        let resultDiv = document.createElement('div');
        resultDiv.setAttribute('id', 'expression' + new Date().getTime());

        let resultStr = Converter.convertFromMathArrayToStr(expressionArray2);
        resultStr += " = ";
        resultStr += finalResult;

        resultDiv.innerHTML = resultStr;
        soulutionArea.appendChild(resultDiv);

        resultDiv.scrollIntoView({ block: 'end' });
    }

    updateValue(event) {
        if ((event.target.value.trim()) !== "") {
            this.button.removeAttribute('disabled');
        }
        else {
            this.button.setAttribute('disabled', 'disabled');
        }
    }
}
let cal = new Calculator();
cal.startProgram();


