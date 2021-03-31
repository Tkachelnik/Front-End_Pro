let name = 'Sasha';
let lastName = "Tkachuk";
let age = 18;
let isMarried = false;
var status = "Student";
nickname = "Tkachelnik";
var nickname;
const sex = "Man";
let isOrphan = false;
const birthYear = 2002;
let isStydingJS = true;
let underfined;

console.log(typeof name, name)
console.log(typeof lastName, lastName)
console.log(typeof age, age)
console.log(typeof isMarried, isMarried)
console.log(typeof status, status)
console.log(typeof nickname, nickname)
console.log(typeof sex, sex)
console.log(typeof isOrphan, isOrphan)
console.log(typeof birthYear, birthYear)
console.log(typeof isStydingJS, isStydingJS)
console.log(typeof underfined, underfined)

let person = {
    name,
    lastName,
    age : 19,
    isMarried : true,
};
console.log("Person: ", person.name, person.lastName, person.age, person.isMarried)


alert("Can you enter some information?")
let isWoman = confirm('If you are woman press OK')
let userName = prompt('What is your name?')
let userFavouriteSport = prompt('What is your favourite sport?')
let HillelRate = prompt('Rate Hillel from 1 to 10?')
console.log('UserInfo:\n is woman: ', isWoman,'\n Name: ', userName,'\n Favourite sport: ', userFavouriteSport, '\n Hillel rate: ', HillelRate)
