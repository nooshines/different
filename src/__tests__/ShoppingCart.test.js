const { test, it, expect } = require("@jest/globals");

const ShoppingCart = require("../ShoppingCart");

const product = {
  name: "Shower Gel",
  id: 1,
  type: "showerGel",
  price: 49.99,
  quantity: 5,
};

const product2 = {
  name: "Shower Gel",
  id: 1,
  type: "showerGel",
  price: 49.99,
  quantity: 3,
};

describe("shoppingCart", () => {
  it("Add Products to the Shopping cart", () => {
    const shoppingCart = new ShoppingCart();
    expect(shoppingCart.products).toEqual([]);
    shoppingCart.add(product);
    expect(shoppingCart.total).toEqual(249.95);
  });

  it("Add additional products of the same type to the shopping cart", () => {
    const shoppingCart = new ShoppingCart();
    expect(shoppingCart.products).toEqual([]);
    shoppingCart.add(product);
    shoppingCart.add(product2);
    expect(shoppingCart.total).toEqual(399.92);
  });
});
