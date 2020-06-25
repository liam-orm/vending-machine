import { expect } from 'chai'

import InventoryService from '../../services/InventoryService'

import { Item } from '../../classes/Item'

/*
  InventoryService:
  - Should be store the users recieved products | DONE
  - Should be store the users coin balance.
*/

describe('InventoryService', () => {
  it('Should be store the users recieved products', () => {
    const item = { Name: 'Candy', Price: .65} as Item;

    InventoryService.StoreItem(item);

    let UsersProducts = InventoryService.GetProducts();

    expect(UsersProducts.Items.includes(item)).to.be.true;
  });
});
