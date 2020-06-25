import { expect } from 'chai'

/*
  SaleService:
  - Should be able to check whether USER_COINS is greater than or equal to REQUIRED_COINS.
  - Should be able to calculate change
*/

describe('Sale Service', () => {
  it('Should be able to check whether userCoins is greater than or equal to requiredCoins', () => {
    let canMakeSale = SaleService.Compare(userCoins, requestedItem)

    expect(canMakeSale).to.be.true
  });
});
