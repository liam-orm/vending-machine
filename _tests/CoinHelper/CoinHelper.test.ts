import { getCoinByName, calculateBalance, calculateCoins } from '../../helpers/coinHelper'
import { expect } from 'chai';
import { Coin } from '../../classes/Coin';

describe('Coin Helper', () => {
  it('Should be able to return the correct coin by a given string', () => {
    const coin: Coin = getCoinByName('Dime')

    expect(coin.value).to.equal(10)
  });

  it('Should be able to calculate balance from a given array of coins', () => {
    const coinArray: Array<Coin> = [new Coin(2.26, 1.8), new Coin(2.26, 1.8)]; // 20

    const balance: number = calculateBalance(coinArray)

    expect(balance).to.be.equal(20)
  });

  it('Should be able to give me an array of coins for a valid given balance', () => {
    const balance = 25;

    const coinArray:Array<Coin> = calculateCoins(balance);

    const Quarter:Coin = new Coin(5.6, 2.4);

    expect(coinArray[0].name).to.be.equal(Quarter.name)
  })
});