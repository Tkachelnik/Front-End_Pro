const showAllBtn = document.getElementById('show-all-btn');
const sendBtn = document.getElementById('send-btn');
const input = document.getElementById('userId');

showAllBtn.addEventListener('click', () => {
    fetch('http://localhost:3000/users/all', {
        method: 'get',
        'Content-Type': 'application/json; charset=utf-8'
    }).then((response) => {
        return response.text();
    }).then((data) => {
        document.body.innerHTML = data;
    })
});

sendBtn.addEventListener('click', () => {
    if(input.value) {
        let userId = input.value;
        fetch(`http://localhost:3000/users/${userId}`, {
            method: 'get',
            'Content-Type': 'application/json; charset=utf-8'
        }).then((response) => {
            return response.text();
        }).then((data) => {
            console.log(data);
            document.body.innerHTML = data;
        })
    } else {
        document.body.innerHTML = 'No input';
    }
})