import { ItemModel } from './item.model';

export class GameModel extends ItemModel {
  release_year: number;
  publisher: string;
  genre: string;
  rating: string;
  platform: string;
}
