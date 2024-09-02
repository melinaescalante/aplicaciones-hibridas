const chalk = require("chalk");
const express = require("express");
const app = express();
const port = 3000;
const ProductManager = require("./ProductManager.js");
app.use(express.json());
//Ruta Home

app.get("/", (request, response) => {
  response.send("Home");
  console.log(chalk.cyan("Cliente ingresó al home"));
});

//Ruta Productos

app.get("/products", (request, response) => {
  response.send("Productos");
  console.log(chalk.cyan("Cliente ingresó a la sección de productos"));
});
//Ruta con parametros
const manager = new ProductManager();

app.get("/products/:id", async (request, response) => {
  const id = parseInt(request.params.id);
  const producto =await manager.getProductById(id);
  response.send(JSON.stringify(producto));
  console.log(chalk.cyan(`Cliente ingresó al producto: ${JSON.stringify(producto)}`));
});
app.post("/products", async (request, response) => {
  const product = request.body;
  console.log('Cliente en la ruta POST: /products')
  console.log(product)
  if( product.name && product.price){
      res.status(202).json({ mensaje: 'Producto Guardado'});

  } else {
      res.status(400).json({ mensaje: 'Producto Invalido'});

  }


});

app.listen(port, () => {
  console.log(chalk.yellow(`Servidor escuchando en el puerto 3000 a la app`));
});

// manager.readJson().then((data) => console.table(data));
