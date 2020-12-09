class ShoppingCart {
  constructor(taxRate = 0) {
    this.products = [];
    this.total = 0;
    this.taxRate = taxRate;
  }
  add(product) {
    if (product.quantity < 1) {
      throw Error("Invalid Quantity");
    }

    const productIndex = this.products.findIndex((item) => {
      return item.id === product.id;
    });

    if (productIndex >= 0) {
      this.products[productIndex].quantity += product.quantity;
    } else {
      this.products.push(product);
    }

    const total =
      this.total + Math.round(product.quantity * product.price * 100) / 100;
    this.total = Math.round(total * 100) / 100;
  }

  getGrandTotal() {
    return (
      Math.round((this.total + this.total * (this.taxRate / 100)) * 100) / 100
    );
  }

  getTotalSalesTax() {
    if (this.taxRate) {
      return parseFloat((this.total * (this.taxRate / 100)).toFixed(1));
    }
    return 0;
  }
}

module.exports = ShoppingCart;
