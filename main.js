const http = require('http')
const port = 4000
const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' })

    const url = request.url

    if (url == '/') {
        response.end('home')
    } else if (url == '/coffee') {
        response.end('Lista de cafes')
    } else if (url == '/contact') {
        response.end('Lista de contactos')
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' })
        response.end('Error 404, ruta no encontrada')


    }
    // response.end('Hola Aplicaciones Hibridas!')
})
server.listen(port, () => {
    console.log('Escuchando el puerto ' + port)
})
