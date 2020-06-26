import { expect } from 'chai'

import InventoryService from '../../services/InventoryService'

import { Item } from '../../classes/Item'

import { Coin } from '../../classes/Coin'

import { calculateBalance } from '../../helpers/coinHelper'

describe('InventoryService', () => {
  it('Should be store the users recieved products', () => {
    const item = { Name: 'Candy', Price: .65} as Item;

    InventoryService.StoreItem(item);

    let UsersProducts = InventoryService.GetProducts();

    expect(UsersProducts.Items.includes(item)).to.be.true;
  });

  it('Should be able to store the users coin balance', () => {
    const initialCoins = InventoryService.coins;
    const initialBalance = calculateBalance(initialCoins)

    let coinsToAdd: Array<Coin> = [new Coin(5.6, 2.4), new Coin(5.6, 2.4)]

    InventoryService.AddCoins(coinsToAdd)

    const newCoins = InventoryService.coins;
    const newBalance = calculateBalance(newCoins)

    expect(newBalance).to.be.greaterThan(initialBalance)
  });

  it ('Should be able to get the users coins via function', () => {
    InventoryService.coins = [new Coin(5.6, 2.4), new Coin(5.6, 2.4)]

    const coins: Array<Coin> = InventoryService.GetCoins()

    expect(coins.length).to.be.equal(2)

  })
});
