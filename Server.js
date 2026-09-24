import http from 'http';
import page from './Pages.js';
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    if(req.url==="/"){
        res.end(page.home());
    }
    else if(req.url === '/about'){
        res.end(page.about());
    }
    else if(req.url === '/contact'){
        res.end(page.contact());
    } else {
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<h1>Page not found</h1>")
    }
});
server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});