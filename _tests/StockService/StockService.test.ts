import { expect } from "chai";

import StockService from '../../services/StockService'

/*

  StockService:
  - Should be able to return the current quantity of a product | DONE
  - Should be able to say if a product is sold out.
  - Should be able to give a user a product

*/

describe('StockService', () => {
  it('Should be able to return the current quantity of a product', () => {
    const testQuantity = 5;
    const testName = 'Candy'
    StockService.SetQuantity(testName, testQuantity);

    let Quantity = StockService.GetQuantity(testName);

    expect(Quantity).to.equal(testQuantity);
  });

  it('Should be able to output whether a product is sold out ', () => {
    const testName = 'Candy'
    let soldOut : boolean = StockService.IsSoldOut(testName)

    expect(soldOut).to.be.false

    StockService.SetQuantity('Candy', 0)

    soldOut = StockService.IsSoldOut(testName)

    expect(soldOut).to.be.true
  });
});
