const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ProductService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: i + 1,
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
      });
    }
  }

  async create(product) {
    const newProduct = {
      id: this.products.length + 1,
      ...product,
    };
    this.products.push(newProduct);

    return newProduct;
  }

  async find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 3000);
    });
  }

  async findOne(id) {
    const product = this.products.find(
      (product) => product.id === parseInt(id),
    );

    if (!product) {
      throw boom.notFound('Product not found');
      // boom.notFound('Product not found');
    }
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex((prod) => prod.id === parseInt(id));
    if (index === -1) {
      throw boom.notFound('Product not found');
    } else {
      const product = this.products[index];
      this.products[index] = { ...product, ...changes };
      return this.products[index];
    }
  }

  async delete(id) {
    const index = this.products.findIndex((prod) => prod.id === parseInt(id));
    if (index === -1) {
      throw boom.notFound('Product not found');
    } else {
      this.products.splice(index, 1);
      return { id };
    }
  }
}

module.exports = ProductService;
