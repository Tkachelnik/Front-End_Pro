let main = document.getElementsByClassName('main')[0];

main.addEventListener('click',async (e) => {
    //console.log('inLinstener');
    const url = "http://localhost:3000/asd";

    let counter = document.getElementById('counter');
    let goodsHtml = document.getElementsByClassName('add-to-cart');
    let goods = [];
    for (let index = 0; index < goodsHtml.length; index++) {
        goods[index] = goodsHtml[index];
    }


    if (goods.includes(e.target)) {
        console.log('inIf');
        let response = await fetch(url, {
            headers: {
                // charset=utf-8
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Methods': 'GET, POST',
                // 'Access-Control-Allow-Headers': 'X-Custom-Header'
            },
            mode: 'no-cors',
            body: JSON.stringify(counter.innerHTML),
            method: 'POST'
        })
        console.log(response);
        if(response.ok) {          
            let data = await response.json();
            console.log(data);
            counter.innerHTML = data;
        }
        console.log('endListener');
    } else {
        alert('Not found');
    }



    // if (goods.includes(e.target)) {
    //     console.log('inIf');
    //      fetch(url, {}).then((response) => {
    //          console.log("request is sent");
    //          return response.json();
    //      }).then((data)=>{
    //         console.log(data);
    //         counter.innerHTML = data;
    //      })
    // } else {
    //     alert('Not found');
    // }
})


