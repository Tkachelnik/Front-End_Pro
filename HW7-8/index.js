function startChat() {
    let button = document.getElementById("sendBtn");
    let input = document.getElementById("inputArea");
    //let checkbox2 = document.getElementById('checkbox2');

    let timerSpam = setSpamBot();

    checkbox2.addEventListener('change', () => {
        if (checkbox2.checked) {
            clearInterval(timerSpam);
        }
        else {
            timerSpam = setSpamBot();
        }
    })
    button.addEventListener('click', msgAdding);
    input.addEventListener('input', updateValue);
    document.addEventListener('keydown', (event) => {
        if (button.getAttribute('disabled') === null && event.code === 'Enter') {
            msgAdding();
        }
    });
}

function createMsg(msgContent) {
    let msgArea = document.getElementById("msgArea");

    let imgAva = document.createElement('img');
    let elemP = document.createElement('p');
    let elemDiv = document.createElement('div');

    msgContent.imgAttributes.forEach(function (value, key) {
        imgAva.setAttribute(`${key}`, `${value}`);
    });
    msgContent.divAttributes.forEach(function (value, key) {
        elemDiv.setAttribute(`${key}`, `${value}`);
    });

    elemP.append(msgContent.text);
    elemDiv.append(imgAva);
    elemDiv.append(elemP);
    msgArea.appendChild(elemDiv);

    elemDiv.scrollIntoView({ block: 'end' });
    return elemDiv;
}

function spamFunc() {
    let spamIndex = new Date().getTime();

    let spamPhrases = ['Nice to meet you in my messanger', 'Do you want a premium account?', 
                       'Do you like the messanger? Leave a review!', 'Check if somebody write you!', 'Do not forget to have a break!'];
    let randNum = randomInteger(0, 4);
    let spamMsg = spamPhrases[randNum];

    let msgContent = {
        text: spamMsg,
        imgAttributes: new Map([['src', 'images/spam.jfif']]),
        divAttributes: new Map([['class', 'spam'], ['id', 'spam' + spamIndex]]),
    }

    createMsg(msgContent);
}

function msgAdding() {
    let index = new Date().getTime();
    let button = document.getElementById("sendBtn");
    let input = document.getElementById("inputArea");

    let checkbox = document.getElementById('checkbox1');
    let userMessage = input.value;
    input.value = "";

    button.setAttribute('disabled', 'disabled');

    let msgContent = {
        text: userMessage,
        imgAttributes: new Map([['src', 'images/user1.jfif']]),
        divAttributes: new Map([['class', 'msg'], ['id', 'msg' + index]]),
    }

    let messageDiv = createMsg(msgContent);
    if (checkbox.checked) {
        let timerDel = setTimeout(() => {
            let delElem = messageDiv;
            delElem.remove();
        }, 5000)
        checkbox.checked = false;
    }
    input.focus();
}

function setSpamBot() {
    return setInterval(spamFunc, 10000);
}

function updateValue(e) {
    let button = document.getElementById("sendBtn");
    if ((e.target.value.trim()) !== "") {
        button.removeAttribute('disabled');
    }
    else {
        button.setAttribute('disabled', 'disabled');
    }
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}



startChat();