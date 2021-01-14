import { UserModel } from './user.model';

export class ReviewModel {
  id: number;
  rate: number;
  description: string;
  datePosted: string;
  reviewer: UserModel;
  reviewed: UserModel;
}





