import { Coin } from '../classes/Coin'

import InventoryService from './InventoryService'

import { calculateCoins } from '../helpers/coinHelper'

class BankService {
  balance: number = 5000;
  transactionBalance: Array<Coin> = [];
  minChangeAmount: number = 1;

  SetBalance (input: number) {
    this.balance = input
  }

  IsChangeAvaliable () {
    return this.balance >= this.minChangeAmount
  }

  ReturnChange (changeToReturn: number) {
    if (changeToReturn > 0 && this.IsChangeAvaliable()) {
      InventoryService.AddCoins(calculateCoins(changeToReturn))

      this.transactionBalance = []
      console.log('Coins have been returned to the value of', changeToReturn)
    } else {
      console.log('No change has been returned')
    }
  }

  CancelTransaction () {
    console.log('Ending current transaction')

    InventoryService.AddCoins(this.transactionBalance)

    this.transactionBalance = []

    console.log('Coins have been returned to the value of', InventoryService.GetBalance())
  }
}

const bankService = new BankService()
export default bankService