import { Products } from '../classes/Products'
import { Item } from 'classes/Item'

import { startingProducts } from '../data/startingProducts'

import InventoryService from './InventoryService'

class StockService {
  products: Products = startingProducts

  GetProduct (itemName: string) : Item {
    let i: number = this.findIndex(itemName)

    return this.products.Items[i]
  }

  GetQuantity (itemName: string) : number {
    let i: number = this.findIndex(itemName)

    return this.products.Items[i].Quantity
  }

  SetQuantity (itemName: string, quantity: number) : void {
    this.GetProduct(itemName).Quantity = quantity
  }

  IsSoldOut (itemName: string) : boolean {
    return this.GetProduct(itemName).Quantity <= 0
  }

  Release (itemName: string) : void {
    let chosenItem = this.GetProduct(itemName)

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