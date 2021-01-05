import { ItemModel } from './item.model';

export class GameModel extends ItemModel {
  releaseYear: number;
  publisher: string;
  genre: string;
  rating: string;
  platform: string;
}
