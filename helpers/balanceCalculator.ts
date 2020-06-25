import { Coin } from '../classes/Coin'

export function calculateBalance(balance: Array<Coin>): number {
  let total: number = 0;

  balance.forEach(coin => {
    total += coin.value
  })

  return total
};
