import { expect } from "chai";

/*

  StockService:
  - Should be able to return the current quantity of a product
  - Should be able to give a user a product
  - Should be able to say if a product is sold out.

*/

describe('StockService', () => {
  it('Should be able to return the current quantity of a product', () => {
    const testQuantity = 5;
    StockService.SetQuantity('Candy', testQuantity);

    let Quantity = StockService.GetQuantity('Candy');

    expect(Quantity).to.equal(testQuantity);
  });
});
