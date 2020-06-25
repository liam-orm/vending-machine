import { Products } from '../classes/Products'
import { Item } from '../classes/Item'

class InventoryService {
  products: Products = { Items: [] }
  balance: number;
  coins: string[];

  StoreItem (item: Item) : boolean {
    this.products.Items.push(item);

    console.log(`Recieved product: ${item.Name}`)

    return true;
  }

  GetProducts () : Products {
    return this.products
  }
};

const inventoryService = new InventoryService()
export default inventoryService