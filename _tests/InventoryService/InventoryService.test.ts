import { expect } from 'chai'

/*
  InventoryService:
  - Should be store the users recieved products
  - Should be store the users coin balance.
  - Should be able to update the users products
  - Should be able to update the users coin balance.
*/

import { expect } from "chai";

describe('InventoryService', () => {
  it('Should be store the users recieved products', () => {

    // create classes and interfaces.
    let Product = {};
    let userInventory = { products: [] };
    InventoryService.store(Product);

    expect(userInventory.products.includes(Product)).to.be.true;
  });
});
