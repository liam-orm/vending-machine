import { IProducts } from '../interfaces/ProductsInterface';
import { Item } from './Item';

export class Products implements IProducts {
  Items: Array<Item>;
}