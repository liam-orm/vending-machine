import { Item } from "../classes/Item"
import { Coin } from "../classes/Coin"

import { calculateBalance } from '../helpers/coinHelper'

class SaleService {
  Compare (enteredCoins: Array<Coin>, requestedItem: Item) {
    return calculateBalance(enteredCoins) - requestedItem.Price >= 0
  }
}

const saleService = new SaleService()
export default saleService