class HW20 {
    startProgram() {
        let createTableBtn = document.getElementById('btnCrTb');
        let container = document.getElementsByClassName('container')[0];
        createTableBtn.addEventListener('click', this.createTable);
        container.addEventListener('click', this.changeColor);  
    }
    changeColor(event) {
        let table = document.getElementsByTagName('table')[0];
        let elem = event.target.closest('td');
        if(!elem || !table.contains(elem)) {
            return;
        }
        elem.setAttribute('class', 'bg-green');
    }
    createTable(event) {
        let numRow = document.getElementById('numRow').value;
        let numCol = document.getElementById('numCol').value;
        if(!numRow || !numCol) {
            alert('Fill all forms');
            return;
        }
        let div = document.getElementsByClassName('container')[0];
        let table = document.createElement('table');
        for (let i = 0; i < numRow; i++) {
            let row = document.createElement('tr');
            for (let ind = 0; ind < numCol; ind++) {
                row.appendChild(document.createElement('td'));
            }
            table.appendChild(row);
        }
        div.appendChild(table);
        //console.log(event.type)
    }
}
let hw20 = new HW20();
hw20.startProgram();