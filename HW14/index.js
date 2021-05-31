function createButtons() {
    for (var i = 0; i < 10; i++) {
        let button = document.createElement('button');
        button.textContent = `Button ${i}`;
        let btnNum = i;
        button.addEventListener('click', function () {
            console.log(`My number is ${btnNum}`);
        });
        document.body.appendChild(button);
    }
}

function createButtons1() {
    for (var i = 0; i < 10; i++) {
        let button = document.createElement('button');
        button.textContent = `Button ${i}`;
        button.addEventListener('click', function () {
            let length = button.textContent.length;
            console.log(`My number is ${button.textContent[length - 1]}`);
        });
        document.body.appendChild(button);
    }
}

function createButtons2() {
    for (let i = 0; i < 10; i++) {
        let button = document.createElement('button');
        button.textContent = `Button ${i}`;
        button.addEventListener('click', function () {
            console.log(`My number is ${i}`);
        });
        document.body.appendChild(button);
    }
}


//createButtons();
//createButtons1();
createButtons2();