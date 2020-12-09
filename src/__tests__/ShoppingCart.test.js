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

const product3 = {
  name: "Shower Gel",
  id: 1,
  type: "showerGel",
  price: 49.99,
  quantity: 2,
};

const product4 = {
  name: "Deodorant",
  id: 2,
  type: "deodorant",
  price: 99.99,
  quantity: 2,
};

describe("shoppingCart", () => {
  it("Add Products to the Shopping cart", () => {
    const shoppingCart = new ShoppingCart();
    expect(shoppingCart.products).toEqual([]);
    shoppingCart.add(product);
    expect(shoppingCart.getGrandTotal()).toEqual(249.95);
  });

  it("Add additional products of the same type to the shopping cart", () => {
    const shoppingCart = new ShoppingCart();
    expect(shoppingCart.products).toEqual([]);
    shoppingCart.add(product);
    shoppingCart.add(product2);
    expect(shoppingCart.getGrandTotal()).toEqual(399.92);
  });

  it("Calculate the tax rate of the shopping cart with multiple item Given", () => {
    const shoppingCart = new ShoppingCart(12.5);
    expect(shoppingCart.products).toEqual([]);
    shoppingCart.add(product3);
    shoppingCart.add(product4);
    expect(shoppingCart.getGrandTotal()).toEqual(337.46);
    expect(shoppingCart.getTotalSalesTax()).toEqual(37.5);
  });
});
