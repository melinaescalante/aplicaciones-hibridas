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

app.get("/products", async (request, response) => {
  const productos= await manager.products;
  response.send(`Productos <br> ${JSON.stringify(productos)}`);
  console.log(chalk.cyan("Cliente ingresó a la sección de productos"));
});
//Ruta con parametros
const manager = new ProductManager();

app.get("/product/:id", async (request, response) => {
  const id = parseInt(request.params.id);
  const producto =await manager.getProductById(id);
  if(producto){
    response.status(202).json({ producto: producto});

  }else{
    response.status(400).json({mensaje: 'No existe producto'})
  }
});
// Post products
app.post("/products", async (request, response) => {
  const product = request.body;
  if( product.title && product.description && product.price && product.image && product.stock){
    await manager.addProductJson(product)
      response.status(202).json({ mensaje: 'Producto Guardado'});
  } else {
      response.status(400).json({ mensaje: 'Producto Incompleto'});
  }
});
// Delete product
app.delete("/product/:id", async (request, response)=>{
  const id = parseInt(request.params.id);
  const product =await manager.getProductById(id)
  console.log(product)
  if (product) {
    response.status(200).json({mensaje: "Producto eliminado"})
  } else {
    response.status(400).json({mensaje: "Producto no se ha podido eliminar"}) 
  }
})
//Put product
app.put("/product/:id", async(request,response)=>{
  const id = parseInt(request.params.id);
  const product =await manager.getProductById(id)
  const information = request.body;
  console.log(information.title, information.description, information.price, information.image, information.stock)

  manager.updateProduct(id,information.title, information.description, information.price, information.image, information.stock)

  if (product) {
    response.status(202).json({mensaje:"Producto correctamente actualizado"})
  } else {
    response.status(400).json({mensaje: "No existe producto"})
  }
})
app.listen(port, async () => {
  console.log(chalk.yellow(`Servidor escuchando en el puerto 3000 a la app`));
  
});
