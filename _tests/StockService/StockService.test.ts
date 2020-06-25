import { expect } from "chai";

import StockService from '../../services/StockService'

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

  it('Should be able to release a product', () => {
    const testName = 'Candy'

    let preReleaseQuantity : number = StockService.GetQuantity(testName)

    StockService.Release('Candy')

    let postReleaseQuantity : number = StockService.GetQuantity(testName)

    expect(postReleaseQuantity).to.be.equal(preReleaseQuantity - 1)
  });
});
