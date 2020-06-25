import { IStock } from '../interfaces/StockInterface';
import { Item } from './Item';

export class Stock implements IStock {
  Items: Array<Item>;
}