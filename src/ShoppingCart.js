class ShoppingCart {
  constructor() {
    this.products = [];
    this.total = 0;
  }
  add(product) {
    if (product.quantity < 1) {
      throw Error("Invalid Quantity");
    }
    const productIndex = this.products.findIndex((item) => {
      item.id === product.id;
    });
    console.log("productIndex", productIndex);
    if (productIndex > 0) {
      this.products[productIndex].quantity += product.quantity;
      this.total += Math.round(product.quantity * product.price * 100) / 100;
    } else {
      this.products.push(product);
      this.total = Math.round(product.quantity * product.price * 100) / 100;
    }
  }
}

module.exports = ShoppingCart;
