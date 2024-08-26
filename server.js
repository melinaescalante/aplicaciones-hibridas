const http = require('http')

const ProductManager = require("./ProductManager.js");
const manager = new ProductManager()

const port = 4000
const server = http.createServer((request, response) => {


    const url = request.url

    if (url == '/') {
        response.end('Bienvenido a la tienda de Monitores Lg!')

    } else if (url == '/products') {

        manager.readJson().then(
            data => {
                let responseLg = JSON.stringify(data)
                console.log(responseLg)
                response.end('Lista de monitores: ' + responseLg)
            })


    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Error 404 | Recurso no encontrado');

    }

})
server.listen(port, () => {
    console.log('Escuchando el puerto ' + port)
})
