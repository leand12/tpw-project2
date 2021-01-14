import { ArticleModel } from './article.model';

export class ItemModel {
  id: number;
  price: number;
  name: string;
  image: string;
  condition: string;
  pertainingArticle: ArticleModel;
}
