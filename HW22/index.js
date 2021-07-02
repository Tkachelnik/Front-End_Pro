class HW22 {
    task1() {
        let arr = [];
        for (let index = 0; index < 20; index++) {
            arr[index] = Math.round(Math.random() * 100);
        }
        console.log('arr', arr);
        let oddArr = arr.filter(X => X % 2 === 0);
        console.log('oddArr', oddArr);
        let avarageNum = 0;
        for (let index = 0; index < arr.length; index++) {
            avarageNum += arr[index];
        }
        avarageNum = avarageNum / arr.length;
        console.log('avarageNum', avarageNum);
        let bigArr = arr.filter(x => x > avarageNum);
        console.log('bigArr', bigArr);
    }
    task2() {
        let timestamp = new Date("2002-12-28").getTime();
        console.log('timestamp', timestamp);
    }
    task3() {
        let eagle = document.getElementById('eagle');
        let tails = document.getElementById('tails');
        let showDiv = document.getElementById('show-div');
        let counter = document.getElementById('counter');
        document.addEventListener('click', (event) => {
            if (!['eagle', 'tails'].includes(event.target.id)) {
                return;
            }
            let curValue = counter.innerHTML;
            let res = Math.random() >= 0.5 ? 'eagle' : 'tails';
            showDiv.innerHTML = '';
            if (res === 'eagle') {
                showDiv.appendChild(this.getCoin('eagle'));
            } else {
                showDiv.appendChild(this.getCoin('tails'));
            }
            eagle.setAttribute('disabled', 'disabled');
            tails.setAttribute('disabled', 'disabled');
            setTimeout(() => {
                eagle.removeAttribute('disabled', 'disabled');
                tails.removeAttribute('disabled', 'disabled');
                showDiv.innerHTML = '';
            }, 2000);
            setTimeout(() => {
                if (event.target.id === res) {
                    counter.innerHTML = ++curValue;
                } else {
                    counter.innerHTML = --curValue;
                }
            }, 1000);
        });
    }
    getCoin(text) {
        let div = document.createElement('div');
        div.classList = 'coin';
        div.innerHTML = text;
        return div;
    }
}

let hw22 = new HW22();
hw22.task1();
hw22.task2();
hw22.task3();