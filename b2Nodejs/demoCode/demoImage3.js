const http = require('http');
const fs = require('fs'); // thư viện đọc ghi files
const sv = http.createServer((req, res) =>{
    console.log(req.url);
    switch(req.url){
        case '/logo.jpg':
            // trả về file logo
            fs.readFile('./Image/logo.jpg', (err, data) => {
                if(err) throw err;

                res.end(data);
            });
            break;
        case '/': 
            // trang chủ
            res.writeHead(200, {'content-type':'text/html'});
            res.end('<h1>Trang Chu</h1> <img src="logo.jpg"/>')
            break;
        default:
            res.writeHead(200, {'Content-type' : 'text/html'});
            res.end('dia chi khong ton tai');
            break;
    }
});

sv.listen(8080, 'localhost', (err, res) => {
    if (err){
        console.log(err);
    }
    console.log("Server dang chay o dia chi: http://localhost:8080");
});

