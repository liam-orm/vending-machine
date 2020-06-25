import { Coin } from '../classes/Coin'

import InventoryService from './InventoryService'

import { calculateCoins } from '../helpers/coinHelper'

class BankService {
  balance: number;
  transactionBalance: Array<Coin> = [];
  minChangeAmount: number = 1;

  SetBalance (input: number) {
    this.balance = input
  }

  IsChangeAvaliable () {
    return this.balance > this.minChangeAmount
  }

  ReturnChange (changeToReturn: number) {
    InventoryService.AddCoins(calculateCoins(changeToReturn))
  }

  CancelTransaction () {
    console.log('Cancelling transaction')

    InventoryService.AddCoins(this.transactionBalance)

    console.log(InventoryService.coins)
  }
}

const bankService = new BankService()
export default bankService