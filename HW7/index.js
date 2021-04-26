let button = document.getElementById("sendBtn");
let input = document.getElementById("inputArea");
let index = 0;
function msgAdding() {
    let msgArea = document.getElementById("msgArea");   
    index++;
    let userMessage = input.value;
    input.value = "";
    button.setAttribute('disabled', 'disabled');
    let messageDiv = document.createElement('div');
    messageDiv.setAttribute('class', 'msg');
    messageDiv.setAttribute('id', 'msg' + index);
    messageDiv.prepend(userMessage);
    msgArea.appendChild(messageDiv);
    messageDiv.scrollIntoView({ block: 'end' });
    input.focus();
}

input.addEventListener('input', updateValue);
document.addEventListener('keydown', function (event) {
    if (button.getAttribute('disabled') === null && event.code == 'Enter') {
        msgAdding();
    }
});
button.addEventListener('click', msgAdding);

function updateValue(e) {
    if ((e.target.value.trim()) !== "") {
        button.removeAttribute('disabled');
    }
    else {
        button.setAttribute('disabled', 'disabled');
    }
}
