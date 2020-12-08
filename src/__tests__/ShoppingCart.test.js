const { test, it, expect } = require("@jest/globals");

const ShoppingCart = require("../ShoppingCart");

describe("shoppingCart", () => {
  it("Add Products to the Shopping cart", () => {
    const product = {
      name: "Shower Gel",
      id: 1,
      type: "showerGel",
      price: 49.99,
      quantity: 5,
    };
    const shoppingCart = new ShoppingCart();
    expect(shoppingCart.products).toEqual([]);
    shoppingCart.add(product);
    expect(shoppingCart.total).toEqual(249.95);
  });
});
