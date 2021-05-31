class ToDoList {
    button = document.getElementById("addBtn");
    input = document.getElementById("inputArea");
    start() {
        this.button.addEventListener('click', () => this.addToDoTask());
        this.input.addEventListener('input', this.updateValue.bind(this));
        this.input.addEventListener('keydown', (event) => {
            if (this.button.getAttribute('disabled') === null && event.code === 'Enter' && this.input.value.trim() !== "") {
                this.addToDoTask();
            }
        });
    }
    addToDoTask(e) {
        let text = this.input.value;
        let taskArea = document.getElementById("taskArea");
        let resultDiv = document.createElement('div');

        this.button.setAttribute('disabled', 'disabled');
        resultDiv.setAttribute('id', 'task' + new Date().getTime());

        let checkbox = this.createCheckBox(resultDiv);

        this.input.value = "";
        resultDiv.append(checkbox);
        resultDiv.append(text);
        taskArea.appendChild(resultDiv);
        
        resultDiv.scrollIntoView({ block: 'end' });
    }
    createCheckBox(resultDiv) {
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('class', 'm-r-4px');
        checkbox.addEventListener('change', () => {
            this.deleteElem(resultDiv, checkbox);
        });
        return checkbox;
    }
    updateValue(event) {
        if ((event.target.value.trim()) !== "") {
            this.button.removeAttribute('disabled');
        }
        else {
            this.button.setAttribute('disabled', 'disabled');
        }
    }
    deleteElem(resultDiv, checkbox) {
        setTimeout(() => {
            resultDiv.remove();
        }, 5000)
    }
}

let mytoDoList = new ToDoList();
mytoDoList.start();

