
const ProductManager = require("./ProductManager.js");

const manager=new ProductManager()
const product={id: 9,
    title: "Monitor Lg 28 pulgadas",
    description: "Monitor Lg 28 pulgadas nuevo de color Negro",
    price: 10000,
    image: "",
    stock: 1}
// manager.addProduct(product)
// console.log(manager.getProducts())
// manager.addProductJson(product)
manager.readJson().then(data=> console.table(data)) 





