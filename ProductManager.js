const fs = require("fs/promises");
class ProductManager {
  products = [];
  path = "data.json";
  constructor() {
    this.readJson();
  }
  async readJson() {
    try {
      const data = await fs.readFile(this.path, 'utf-8');
      const json = JSON.parse(data);
      this.products = json;
      return this.products
    } catch (error) {
      console.error('Ocurrio un error ', error)
    }
  }

  async writeJson() {
    try {
      const data = JSON.stringify(this.products, null, 2);
      await fs.writeFile(this.path, data);
    } catch (error) {
      console.error('Error', error);
    }
  }

  async addProductJson(product) {
    await this.readJson();

    this.products.push(product);

    await this.writeJson();
  }
}
module.exports = ProductManager;
