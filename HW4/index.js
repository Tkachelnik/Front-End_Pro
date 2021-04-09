console.log('Ex1');

const convertDegrees = (temperature, scale) => {
    let result;
    switch (scale) {
        case 'F':
            result = "F = " + temperature + "\nC = " + get_F_to_C(temperature) + "\nK = " + get_F_to_K(temperature);
            break;
        case 'K':
            result = "K = " + temperature + "\nC = " + get_K_to_C(temperature) + "\nF = " + get_K_to_F(temperature);
            break;
        case 'C':
            result = "C = " + temperature + "\nF = " + get_C_to_F(temperature) + "\nK = " + get_C_to_K(temperature);
            break;
        default:
            result = "Incorrect input";
            break;
    }
    return result;
}
function get_F_to_C(temperature) {
    return (temperature - 32) * 5 / 9;
}
function get_F_to_K(temperature) {
    return (temperature - 32) * 5 / 9 + 273.15;
}
function get_C_to_F(temperature) {
    return (temperature * 9 / 5) + 32;
}
function get_C_to_K(temperature) {
    return temperature + 273.15;
}
function get_K_to_C(temperature) {
    return temperature - 273.15;
}
function get_K_to_F(temperature) {
    return (temperature - 273.15) * 9 / 5 + 32;
}


console.log(convertDegrees(273, 'F'));
console.log(convertDegrees(273, 'C'));
console.log(convertDegrees(273, 'K'));


console.log('Ex2');

const calsSumOfElems = (n) => {
    if(n === 0){
        return n;
    } 
    return n += calsSumOfElems(n-1);
}

let n = 5;
if(n > 0){
    console.log(calsSumOfElems(n));
}
else{
    console.log('Only number above zero are allowed')
}