const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, "ket noi thanh cong", 
    {
        'Content-Type': 'text/html'
    });

    res.write("<meta charset='utf-8' /> <h1>Chạy được tiếng việt nhé</h1>");
    res.end();

});

server.listen(8080, 'localhost', (err, res) => {
    if (err){
        console.log(err);
    }
    console.log("Server dang chay o dia chi: http://localhost:8080");
});
// chay lenh : node demo1.js
// mo trinh duyet web , vao di chi tren de xem ket qua