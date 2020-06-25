import { Coin } from '../classes/Coin'

import InventoryService from './InventoryService'

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

  CancelTransaction () {
    console.log('Cancelling transaction')
    InventoryService.balance.concat(this.transactionBalance)

    this.transactionBalance.forEach(coin => {
      InventoryService.balance.push(coin)
      console.log(`Returning coin: ${coin.name}`)
    })
    console.log(InventoryService.balance)
  }
}

const bankService = new BankService()
export default bankService