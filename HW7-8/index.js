let button = document.getElementById("sendBtn");
let input = document.getElementById("inputArea");
let index = 0;
let spamIndex = 0;

window.onload = () => {
    let timerSpam = setInterval(spamFunc, 10000);
}

button.addEventListener('click', msgAdding);
input.addEventListener('input', updateValue);
document.addEventListener('keydown', (event) => {
    if (button.getAttribute('disabled') === null && event.code == 'Enter') {
        msgAdding();
    }
});

function spamFunc() {
    let spamPhrases = ['Nice to meet you in my messanger', 'Do you want a premium account?', 'Do you like the messanger? Leave a review!', 'Check if somebody write you!', 'Do not forget to have a break!'];
    spamIndex++;

    let msgArea = document.getElementById("msgArea");

    let imgAva = document.createElement('img');
    let spamP = document.createElement('p');
    let spamDiv = document.createElement('div');
    let randNum = randomInteger(0, 4);
    let spamMsg = spamPhrases[randNum];

    imgAva.setAttribute('src', 'images/spam.jfif');
    spamDiv.setAttribute('class', 'spam');
    spamDiv.setAttribute('id', 'spam' + spamIndex);

    spamP.append(spamMsg);
    spamDiv.append(imgAva);
    spamDiv.append(spamP);
    msgArea.appendChild(spamDiv);

    spamDiv.scrollIntoView({ block: 'end' });
}
function updateValue(e) {
    if ((e.target.value.trim()) !== "") {
        button.removeAttribute('disabled');
    }
    else {
        button.setAttribute('disabled', 'disabled');
    }
}
function msgAdding() {
    index++;

    let msgArea = document.getElementById("msgArea");
    let checkbox = document.getElementById('checkbox');
    let userMessage = input.value;
    input.value = "";

    let imgAva = document.createElement('img');
    let messageDiv = document.createElement('div');
    let messageP = document.createElement('p');

    imgAva.setAttribute('src', 'images/user1.jfif');
    button.setAttribute('disabled', 'disabled');
    messageDiv.setAttribute('class', 'msg');
    messageDiv.setAttribute('id', 'msg' + index);

    messageP.append(userMessage);
    messageDiv.append(imgAva);
    messageDiv.append(messageP);
    msgArea.appendChild(messageDiv);

    if (checkbox.checked) {
        let timerDel = setTimeout(() => {
            let delElem = messageDiv;
            delElem.remove();
        }, 5000)
        checkbox.checked = false;
    }

    messageDiv.scrollIntoView({ block: 'end' });
    input.focus();
}
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
