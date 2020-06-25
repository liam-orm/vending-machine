import { getCoinByName } from '../../helpers/coinHelper'
import { expect } from 'chai';
import { Coin } from 'classes/Coin';

describe('Coin Helper', () => {
  it('It should be able to return the correct coin by a given string', () => {
    let coin: Coin = getCoinByName('Dime')

    console.log(coin)

    expect(coin.value).to.equal(10)
  });
});