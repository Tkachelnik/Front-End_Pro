class Program {
    button1 = document.getElementById('requestBtn1');
    button2 = document.getElementById('requestBtn2');
    button3 = document.getElementById('requestBtn3');
    button4 = document.getElementById('requestBtn4');
    buttonClear = document.getElementById('clearBtn');
    start() {
        this.button1.addEventListener('click', () => {
            let requestOptions = new RequestOptions('json', 'http://jsonplaceholder.typicode.com/users', 'GET');
            this.request(requestOptions)
                .then((data) => {
                    data.sort(this.compareByCompany);
                    for (let index = 0; index < data.length; index++) {
                        this.createDiv(data[index]);
                    }
                })
        })
        this.button2.addEventListener('click', ()=>{
            let requestOptions = new RequestOptions('json', 'http://jsonplaceholder.typicode.com/users', 'GET');
            this.request(requestOptions)
                .then((data) => {
                    for (let index = 0; index < data.length; index++) {
                        if(data[index].name[0] === 'C'){
                            this.createDiv(data[index]);
                        }
                    }
                })
        })
        this.button3.addEventListener('click', ()=>{
            let requestOptions = new RequestOptions('json', 'http://jsonplaceholder.typicode.com/users', 'GET');
            this.request(requestOptions)
                .then((data) => {
                    for (let index = 0; index < data.length; index++) {
                        if(data[index].address.city[0] === 'R'){
                            this.createDiv(data[index]);
                        }
                    }
                })
        })
        this.button4.addEventListener('click', ()=>{
            let requestOptions = new RequestOptions('json', 'http://jsonplaceholder.typicode.com/users', 'GET');
            let userID = prompt('Enter user ID');
            if(userID === null) return;
            let url = new URL( 'http://jsonplaceholder.typicode.com/users');
            url.pathname += `/${userID}/posts`;
            requestOptions.url = url;
            this.request(requestOptions)
                .then((data) => {
                    if(data.length === 0){
                        alert(`There is no user with id = \'${userID}\'`);
                    }
                    for (let index = 0; index < data.length; index++) {                    
                            this.createDiv(data[index]);
                    }
                })
        })
        this.buttonClear.addEventListener('click', ()=>{
            let soulutionArea = document.getElementById('soulutionArea');
            soulutionArea.innerHTML = '';
        })
    }
    async request(requestOptions) {
        let responce = await fetch(requestOptions.url, {
            method: requestOptions.method,
            headers: {
                'Content-Type':  'application/json'
            },
        })
        return await responce.json();
    }
    createDiv(elem) {
        let soulutionArea = document.getElementById('soulutionArea');
        let resultString = this.createHtmlFromJsObject(elem, '', '');
        let div = document.createElement('div');
        div.innerHTML = resultString;
        soulutionArea.appendChild(div);
        div.scrollIntoView({ block: 'end' });
    }
    createHtmlFromJsObject(elem, resultString, indent) {
        for (const key in elem) {
            if(typeof elem[key] === 'object') {
                let tempString = this.createHtmlFromJsObject(elem[key], '','&emsp;');
                resultString += `${indent}\"${key}\": {<br>${tempString}${indent}}<br>`;
            }
            else{   
                resultString += `${indent}\"${key}\" : \"${elem[key]}\" <br>`;
            }
        }
        return resultString;
    }

    compareByCompany(a, b) {
        if (a.company.name > b.company.name) return 1;
        if (a.company.name === b.company.name) return 0;
        if (a.company.name < b.company.name) return -1;
    }
}

class RequestOptions {
    #responseType;
    #url;
    #method;
    constructor(_responseType, _url, _method) {
        this.#responseType = _responseType;
        this.#url = _url;
        this.#method = _method;
    }

    get url() {
        return this.#url;
    }
    set url(value) {
        this.#url = value;
    }

    get responseType() {
        return this.#responseType;
    }
    set responseType(value) {
        this.#responseType = value;
    }

    get method() {
        return this.#method;
    }
    set method(value) {
        this.#method = value;
    }
}

let program = new Program();
program.start();