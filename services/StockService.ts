import { Products } from '../classes/Products'

import { startingProducts } from '../data/startingProducts'

import InventoryService from './InventoryService'

class StockService {
  products: Products = startingProducts

  GetQuantity (itemName: string) {
    let i: number = this.findIndex(itemName)

    return this.products.Items[i].Quantity
  }

  SetQuantity (itemName: string, quantity: number) {
    let i: number = this.findIndex(itemName)

    this.products.Items[i].Quantity = quantity
  }

  IsSoldOut (itemName: string) : boolean {
    let i : number = this.findIndex(itemName)

    return this.products.Items[i].Quantity <= 0
  }

  Release (itemName: string) {
    let i : number = this.findIndex(itemName)

    let chosenItem = this.products.Items[i]

    chosenItem.Quantity -= 1

    InventoryService.StoreItem(chosenItem)

    console.log(`Chosen Item: ${chosenItem.Name} has been released`)
  }


  private findIndex (itemName: string) : number {
    return this.products.Items.findIndex(x => x.Name.toLowerCase() === itemName.toLowerCase())
  }
}

const stockService = new StockService()
export default stockService