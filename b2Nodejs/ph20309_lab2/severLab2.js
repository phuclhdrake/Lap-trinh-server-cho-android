const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res)=> {
    console.log(req.url);
    if(req.url == '/'){
        res.writeHead(200, "OK", {
            'content-typew': 'text/html'
        });
        res.end();
    }else{
        fs.readFile(req.url.substring(1), (err, data) => {
            if(err){
                res.writeHead(404, {
                    'content-type': 'text/html'
                });
                return res.end();
            }

            if(req.url.indexOf('.css')>0){
                res.writeHead(200,"OK",{'Content-type':'text/css'});
            }else{
                res.writeHead(200,"OK",{'Content-type':'text/html'});
            }
    
            // res.writeHead(200, "OK", {
            //     'content-type': 'text/html'
            // });

            res.write(data.toString('utf-8'));
            res.end();
        });
    }

});

server.listen(8080, 'localhost', (err, res)=> {
    if(err){
        console.log(err);
    }
    console.log('Địa chỉ: http://localhost:8080/home.html');
});