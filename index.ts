import StockService from './services/StockService'
import SaleService from './services/SaleService';
import InventoryService from './services/InventoryService'
import BankService from './services/BankService'

import { Item } from './classes/Item';
import { Coin } from './classes/Coin';

import { getCoinByName, calculateBalance } from './helpers/coinHelper'


const prompts = require('prompts');

class VendingMachine {
  mode: string;
  selectedProduct: Item;

  constructor() {
    this.start()
  }

  async start() {
    console.log('Welcome to the Vending machine!')
    this.SelectMode()
  }

  async SelectMode() {
    const mode = await prompts(
      {
        type: 'select',
        name: 'value',
        message: '\nPlease select coin mode',
        choices: [
          {
            title: 'By name | e.g Dime',
            value: 'byName'
          },
          {
            title: 'By weight (grams) and size (cm) | e.g weight: 5.6, size: 2.4',
            value: 'byWeightAndSize'
          }
        ]
      }
    )

    this.mode = mode.value

    this.SelectProduct()
  }

  async SelectProduct() {
    InventoryService.coins = [] // resetting tracking coins

    if (!BankService.IsChangeAvaliable()) {
      console.log('PLEASE ENTER EXACT CHANGE, NO CHANGE WILL BE GIVEN')
    }

    const soldoutCandy = StockService.IsSoldOut('Candy')
    const soldoutChips = StockService.IsSoldOut('Chips')
    const soldoutCola = StockService.IsSoldOut('Cola')

    const product = await prompts(
      {
        type: 'select',
        name: 'value',
        message: '\nPlease select a product',
        choices: [
          { title: `Candy ${soldoutCandy ? 'SOLDOUT' : ''}`, value: soldoutCandy ? 'SOLDOUT' : 'Candy' },
          { title: `Chips ${soldoutChips ? 'SOLDOUT' : ''}`, value: soldoutChips ? 'SOLDOUT' : 'Chips' },
          { title: `Cola ${soldoutCola ? 'SOLDOUT' : ''}`, value: soldoutCola ? 'SOLDOUT' : 'Cola' },
        ]
      }
    )

    if (product.value === 'SOLDOUT') {
      console.log('\nPlease select again')
    } else {
      this.selectedProduct = StockService.GetProduct(product.value)

      this.AskForCoin();
    }
  }

  async AskForCoin() {
    if (this.mode === 'byName') {
      const currentCoin = await prompts({
        type: 'text',
        name: 'value',
        message: `\nPlease enter name of the coin | ${BankService.IsChangeAvaliable() ? 'INSERT COIN' : 'EXACT CHANGE ONLY'}`,
        validate: value => {
          let val = value.toLowerCase()
          if (val === 'dime' || val === 'nickel' || val === 'quarter') return true
          else {
            return `Invalid Coin: ${value}`
          }
        }
      })

      BankService.transactionBalance.push(getCoinByName(currentCoin.value))
    }

    if (this.mode === 'byWeightAndSize') {
      const weight = await prompts(
        {
          type: 'text',
          name: 'value',
          message: '\nPlease enter weight (grams) ',
        }
      )

      const size = await prompts(
        {
          type: 'text',
          name: 'value',
          message: '\nPlease enter size (cm) '
        }
      )
      const coin = new Coin(parseFloat(weight.value), parseFloat(size.value))

      console.log(`\n You have entered a ${coin.name}`)

      BankService.transactionBalance.push(coin)
    }


    await this.AskAgain()
  }

  async AskAgain() {
    const again = await prompts({
      type: 'toggle',
      name: 'value',
      message: '\nWould you like to enter another coin?',
      initial: true,
      active: 'yes',
      inactive: 'no'
    })

    if (again.value) await this.AskForCoin();
    else await this.ComparePrice();
  }

  async ComparePrice() {
    const Balance = calculateBalance(BankService.transactionBalance)

    console.log(`\nThe Price of this product is ${this.selectedProduct.Price}c`)
    console.log(`\nYou have entered. ${Balance}c`)

    if (!SaleService.Compare(BankService.transactionBalance, this.selectedProduct)) {
      console.log(`\nYou are short ${SaleService.CalculateRemaining(BankService.transactionBalance, this.selectedProduct)}c`)
      console.log('\nPlease enter more coins')
      await this.AskForCoin()
    } else {
      this.ConfirmPurchase();
    }
  }

  async ConfirmPurchase() {
    const confirm = await prompts({
      type: 'toggle',
      name: 'value',
      message: `Are you sure you would like to purchase ${this.selectedProduct.Name}?`,
      initial: true,
      active: 'yes',
      inactive: 'no'
    })

    if (confirm.value) {
      console.log('THANK YOU')

      StockService.Release(this.selectedProduct.Name)

      const Change = SaleService.CalculateChange(BankService.transactionBalance, this.selectedProduct)
      const Profit = calculateBalance(BankService.transactionBalance) - Change

      BankService.ReturnChange(Change);
      BankService.SetBalance(+Profit)

      this.AnotherPurchase()
    } else {
      this.Cancel()
    }
  }

  async AnotherPurchase () {
    const purchaseAgain = await prompts({
      type: 'toggle',
      name: 'value',
      message: `Would you like to make another purchase?`,
      initial: true,
      active: 'yes',
      inactive: 'no'
    })

    if (purchaseAgain.value) {
      this.SelectProduct()
    } else {
      console.log('Thank you for using my Vending Machine -- Goodbye!')
      process.exit()
    }
  }

  async Cancel () {
    BankService.CancelTransaction()
    this.AnotherPurchase();
  }
}

new VendingMachine()