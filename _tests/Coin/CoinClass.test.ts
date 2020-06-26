import { expect } from 'chai';

import { Coin } from '../../classes/Coin'

describe('Coin Class', () => {
  it('It should be able to give me a name of a coin if given weight and size', () => {
    const nickel: Coin = new Coin(5, 2.1)
    const quarter: Coin = new Coin(5.6, 2.4)
    const dime: Coin = new Coin(2.26, 1.8)

    expect(nickel.name).to.equal('Nickel')
    expect(quarter.name).to.equal('Quarter')
    expect(dime.name).to.equal('Dime')
  });

  it('Should be able to work out that a coin is invalid', () => {
    const massiveCoin: Coin = new Coin(20000, 12314)

    expect(massiveCoin.name).to.be.equal('INVALID COIN')
    expect(massiveCoin.value).to.be.equal(0)
  })

  it('Should be able to compare weight and size, and if one is invalid return invalid coin', () => {
    const fakeNickel: Coin = new Coin(1000, 2.1)
    const fakeQuarter: Coin = new Coin(2000, 2.4)
    const fakeDime: Coin = new Coin(3000, 1.8)

    expect(fakeNickel.name).to.equal('INVALID COIN')
    expect(fakeQuarter.name).to.equal('INVALID COIN')
    expect(fakeDime.name).to.equal('INVALID COIN')

    expect(fakeNickel.value).to.be.equal(0)
    expect(fakeQuarter.value).to.be.equal(0)
    expect(fakeDime.value).to.be.equal(0)
  })
});