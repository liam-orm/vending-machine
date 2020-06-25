import { expect } from 'chai'

import InventoryService from '../../services/InventoryService'

import { Item } from '../../classes/Item'
import inventoryService from '../../services/InventoryService';

/*
  InventoryService:
  - Should be store the users recieved products | DONE
  - Should be store the users coin balance.
  - Should be able to update the users products
  - Should be able to update the users coin balance.
*/

describe('InventoryService', () => {
  it('Should be store the users recieved products', () => {
    const item = { Name: 'Candy', Price: .65} as Item;

    InventoryService.StoreItem(item);

    let Stock = InventoryService.GetStock();

    expect(Stock.Items.includes(item)).to.be.true;
  });
});
