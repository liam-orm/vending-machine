import { ICoin } from '../interfaces/CoinInterface'

export class Coin implements ICoin {
  weight: number;
  size: number;
  value: number = 0;
  name: string = '';

  constructor (weight: number, size: number) {
    this.getCoinInformation(weight, size)
  }

  getCoinInformation (weight: number, size: number) {
    switch (size) {
      case 1.8:
        if (weight === 2.26) {
          this.name = 'Dime';
          this.value = 10;
        } else {
          this.name = 'INVALID COIN'
          this.value = 0
        }
        break;
      case 2.1:
        if (weight === 5) {
          this.name = 'Nickel';
          this.value = 5;
        } else {
          this.name = 'INVALID COIN'
          this.value = 0
        }
        break;
      case 2.4:
        if (weight === 5.6) {
          this.name = 'Quarter';
          this.value = 25;
        } else {
          this.name = 'INVALID COIN'
          this.value = 0
        }
        break;
      default:
        this.name = 'INVALID COIN'
        this.value = 0
        break;
    }
  }
};
