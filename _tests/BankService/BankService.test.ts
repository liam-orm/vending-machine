/*
  BankService:
  - Should be able to say if change can be returned.
  - Should be able to return the users coins.
  - Should be able to return exact change.
*/

import { expect } from "chai";

describe('Bank Service', () => {
  it('Should be able to say if change can be returned', () => {
    BankService.SetBalance(2)

    let preChange = BankService.IsChangeAvaliable()

    BankService.SetBalance(0)

    let postChange = BankService.IsChangeAvaliable()

    expect(preChange).to.be.true
    expect(postChange).to.to.false
  });
});