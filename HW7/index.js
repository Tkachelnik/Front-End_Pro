let button = document.getElementById("sendBtn");
let index = 0;
let msgArea = document.getElementById("msgArea");
let input = document.getElementById("inputArea");
function msgAdding() {
    if (index == 15) {
        let temp = msgArea.getElementsByTagName('div')[0];
        temp.remove();
        index--;
    }
    let userMessage = input.value;
    input.value = "";
    let messageDiv = document.createElement('div');
    msgArea.appendChild(messageDiv);
    messageDiv.prepend(userMessage);
    index++;
}
button.addEventListener('click', msgAdding);
