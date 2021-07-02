const http = require('http');

const server = http.createServer(function (req, res) {
    let data = '';
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:63342');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, credentials');
    //   'Access-Control-Allow-Methods': 'GET, POST',
    //             'Access-Control-Allow-Headers': 'X-Custom-Header'

    req.on('data',(chunk) => {
        data += chunk;
        console.log('data: ', data);
    });

    req.on('end', async () => {
        data = JSON.parse(data);
        console.log(data);
        data = +data + 1;
        console.log('+data', data);
        let result = JSON.stringify(data);
        console.log('result', result);
        res.write(result);
        console.log('write');
        res.end();
        console.log('end');
    });
});
server.listen(3000);
