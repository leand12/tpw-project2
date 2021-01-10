import { TagModel } from './tag.model';
import { UserModel } from './user.model';

export class ArticleModel {
  id: number;
  name: string;
  totalPrice: number;
  description: string;
  shippingFee: number;
  datePosted: string;
  tags: TagModel[];
  isSold: boolean;
  timesViewed: number;
  shopCart: UserModel[];
  saved: UserModel[];
  seller: UserModel;
  buyer: UserModel;
}
