import { Stock } from '../classes/Stock'
import { Item } from '../classes/Item'

class InventoryService {
  stock: Stock = { Items: [] }
  balance: number;
  coins: string[];

  StoreItem (item: Item) : boolean {
    this.stock.Items.push(item);

    console.log(`Recieved product: ${item.Name}`)

    return true;
  }

  GetStock () : Stock {
    return this.stock
  }
};

const inventoryService = new InventoryService()
export default inventoryService