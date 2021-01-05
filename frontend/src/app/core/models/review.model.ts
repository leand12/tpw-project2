import { UserModel } from './user.model';

export class ReviewModel {
  rate: number;
  description: string;
  datePosted: string;
  reviewer: UserModel;
  reviewed: UserModel;
}





