const http = require('http');

const server=http.createServer((req, res) => {
    const url=req.url
    if (url===`/home`) {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>Welcome home</html>')
        res.end()
    }else if(url==='/about'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>welcome to About Us page</html>')
        res.end()
    }else if(url==='/node'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>Welcome to my Node Js project</html>')
        res.end()
    }
   
})
server.listen(3000);