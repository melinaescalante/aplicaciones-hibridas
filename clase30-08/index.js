const chalk = require("chalk");
const express = require("express");
const app = express();
const port = 3000;

//Ruta Home

app.get("/", (response, request) => {
  response.send("Home");
  console.log(chalk.cyan("Cliente ingresó al home"));
});

//Ruta Productos

app.get("/products", (response, request) => {
  response.send("Productos");
  console.log(chalk.cyan("Cliente ingresó a la sección de productos"));
});
//Ruta con parametros

app.get("/products/:id", (request, response ) => {
  const id = request.params.id;
  response.send(`Producto ${id}`);
  console.log(chalk.cyan(`Cliente ingresó al producto: ${id}`));
});


app.listen(port, () => {
  console.log(chalk.yellow(`Servidor escuchando en el puerto 3000 a la app`));
});
