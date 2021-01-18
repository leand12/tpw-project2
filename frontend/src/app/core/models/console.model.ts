import { ItemModel } from './item.model';

export interface ConsoleModel extends ItemModel {
  release_year: number;
  brand: string;
  storage_capacity: string;
  color: string;
}
