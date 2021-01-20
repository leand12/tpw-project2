import {ItemModel} from '@core/models/item.model';
import {UserModel} from '@core/models/user.model';
import {TagModel} from '@core/models/tag.model';

export interface ArticleModel {
  id?: number;
  name: string;
  total_price?: number;
  description?: string;
  shipping_fee?: number;
  date_posted?: string;
  tag?: number[];
  is_sold?: boolean;
  times_viewed?: number;
  shop_cart?: number[];
  saved?: number[];
  seller: number;
  buyer?: number;
  items_in_article: number[];
}

export interface ArticleReadModel {
  id: number;
  name: string;
  total_price: number;
  description: string;
  shipping_fee: number;
  date_posted: string;
  tag: TagModel[];
  is_sold: boolean;
  times_viewed: number;
  shop_cart: number[];
  saved: number[];
  seller: UserModel;
  buyer: number;
  items_in_article: ItemModel[];
}
