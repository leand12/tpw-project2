import { ArticleModel } from './article.model';

export class ItemModel {
  price: number;
  name: string;
  image: string;
  condition: string;
  pertainingArticle: ArticleModel;
}
