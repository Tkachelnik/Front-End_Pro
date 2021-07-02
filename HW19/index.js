class HW19 {
    cookie1() {
        document.cookie = "name=Ivan";
        let cookieMap = this.getCookieMap(document.cookie);
        console.log(cookieMap.get('name'));
    }

    cookie2() {
        document.cookie = "myName=Sasha";
        document.cookie = "myAge=18";
        let cookieMap = this.getCookieMap(document.cookie);
        console.log(cookieMap.get('myName'));
        console.log(cookieMap.get('myAge'));
    }

    cookie3() {
        for (let index = 1; index <= 5; index++) {
            let input = document.getElementById('input' + index);
            let cookieMap = this.getCookieMap(document.cookie);
            if (cookieMap.get('input' + index) !== undefined) {
                input.value = cookieMap.get('input' + index);
            }
        }
        for (let index = 1; index <= 5; index++) {
            let input = document.getElementById('input' + index);
            input.addEventListener('input', (event) => {
                document.cookie = 'input' + index + '=' + event.target.value + ';max-age=3600'
            });
        }
    }

    localStorage1() {
        let textArea = document.getElementById('textarea1');
        if (localStorage.textArea !== undefined) {
            textArea.value = localStorage.textArea;
        }
        textArea.addEventListener('input', (e) => {
            localStorage.textArea = e.target.value;
        })
    }

    localStorage2() {
        localStorage.clear();
        let i;
        let countOfVersions = 0;
        let numOfVersion = document.getElementById("num-of-version");
        let textArea = document.getElementById('textarea2');
        let buttonSave = document.getElementById('btnSave');
        let btnDown = document.getElementById('btnDown');
        let btnUp = document.getElementById('btnUp');

        btnUp.addEventListener('click', () => {
            let result;
            if (localStorage.getItem('version' + (i + 1)) === null) {
                result = localStorage.getItem('version1');
                i = 1
            } else {
                result = localStorage.getItem('version' + (i + 1));
                i += 1;
            }
            numOfVersion.innerText = i;
            textArea.value = result;
        });
        btnDown.addEventListener('click', () => {
            let result;
            if (localStorage.getItem('version' + (i - 1)) === null) {
                result = localStorage.getItem('version' + countOfVersions);
                i = countOfVersions;
            } else {
                result = localStorage.getItem('version' + (i - 1));
                i -= 1;
            }
            numOfVersion.innerText = i;
            textArea.value = result;
        });

        textArea.addEventListener('input', this.updateValue.bind(this));
        buttonSave.addEventListener('click', () => {
            countOfVersions += 1;
            i = countOfVersions;
            localStorage.setItem('version' + (countOfVersions), textArea.value);
            numOfVersion.innerText = i;
        });

    }

    updateValue(event) {
        let buttonSave = document.getElementById('btnSave');
        if ((event.target.value.trim()) !== "") {
            buttonSave.removeAttribute('disabled');
        }
        else {
            buttonSave.setAttribute('disabled', 'disabled');
        }
    }



    getCookieMap(cookie) {
        let cookieArray = cookie.split(';');
        let cookieMap = new Map();
        for (let index = 0; index < cookieArray.length; index++) {
            let oneCookie = cookieArray[index].split('=');
            cookieMap.set(oneCookie[0].trim(" "), oneCookie[1]);
        }
        return cookieMap;
    }
}

let hw19 = new HW19()
hw19.cookie1();
hw19.cookie2();
hw19.cookie3();
hw19.localStorage1();
hw19.localStorage2();