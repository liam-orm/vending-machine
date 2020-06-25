import { Products } from '../classes/Products'
import { Item } from '../classes/Item'
import { Coin } from '../classes/Coin'

class InventoryService {
  products: Products = { Items: []}
  balance: Array<Coin> = [];

  StoreItem (item: Item) : boolean {
    let i = this.products.Items.findIndex(x => x.Name.toLowerCase() === item.Name.toLowerCase())

    if (i >= 0) {
      this.products.Items[i].Quantity += 1
    } else {
      item.Quantity = 1
      this.products.Items.push(item)
    }

    let j = this.products.Items.findIndex(x => x.Name.toLowerCase() === item.Name.toLowerCase())

    this.products.Items.push(item);

    console.log(`Recieved product: ${item.Name} | New Quantity: ${this.products.Items[j].Quantity}`)

    return true;
  }

  GetProducts () : Products {
    return this.products
  }
};

const inventoryService = new InventoryService()
export default inventoryService