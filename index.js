// docker run --rm -p 8081:8080 fpgce/gitops:latest

const { createServer } = require('node:http')

const port = 8080

createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hello, World!\n')
}).listen(port, () => {
    console.log('Server is running at http://localhost:3000/')
})