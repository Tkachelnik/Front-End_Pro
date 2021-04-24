let button = document.getElementById("sendBtn");
//let index = 0;
let msgArea = document.getElementById("msgArea");
let input = document.getElementById("inputArea");
function msgAdding() {
    // if (index == 15) {
    //     let temp = msgArea.getElementsByTagName('div')[0];
    //     temp.remove();
    //     index--;
    // }
    let userMessage = input.value;
    input.value = "";
    button.setAttribute('disabled', 'disabled');
    let messageDiv = document.createElement('div');
    messageDiv.prepend(userMessage);
    msgArea.appendChild(messageDiv);
    messageDiv.scrollIntoView({  block: 'end'});
    input.focus();
   // index++;
}
button.addEventListener('click', msgAdding);

input.addEventListener('input', updateValue);

function updateValue(e) {
    if(e.target.value){
        button.removeAttribute('disabled');
    }
    else{
        button.setAttribute('disabled', 'disabled');
    }
}
