const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url);
    switch (req.url) {
        case '/': // trang chủ
            homePage(req, res);
            break;
        case '/gioithieu.html': 
            gioiThieu(req, res);
            break;
        default:
            res.writeHead(200, { 'Content-Type': "text/html" });
            res.end("Trang chu khong ton tai");
            break;
    }
});
const homePage = (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html'});
    res.end('<h1>Trang Home</h1>');
}
const gioiThieu = (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html'});
    res.end('<h1>Trang gioi thieu</h1>');
};
server.listen(8080, 'localhost', (err, res) => {
    if (err){
        console.log(err);
    }
    console.log("Server dang chay o dia chi: http://localhost:8080");
});