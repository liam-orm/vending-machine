import { expect } from "chai";

import BankService from '../../services/BankService'

import InventoryService from '../../services/InventoryService'
import { Coin } from "../../classes/Coin";

/*
  BankService:
  - Should be able to say if change can be returned. | DONE
  - Should be able to return the users coins. | DONE
  - Should be able to return exact change.
*/

describe('Bank Service', () => {
  it('Should be able to say if change can be returned', () => {
    BankService.SetBalance(2)

    let preChange = BankService.IsChangeAvaliable()

    BankService.SetBalance(0)

    let postChange = BankService.IsChangeAvaliable()

    expect(preChange).to.be.true
    expect(postChange).to.to.false
  });

  it('Should be able to return the users entered coins', () => {
    const sampleCoins : Array<Coin> = [new Coin(5.6, 2.4), new Coin(5.6, 2.4)] // Two Quarters, 50c
    const intialUserCoinCount: number = InventoryService.balance.length

    BankService.transactionBalance = sampleCoins

    BankService.CancelTransaction()

    const userCoinCount: number = InventoryService.balance.length

    expect(userCoinCount).to.be.greaterThan(intialUserCoinCount)
  })
});
