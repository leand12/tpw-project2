import {UserModel} from '@core/models/user.model';

export class ReviewModel {
  id: number;
  rate: number;
  description: string;
  date_posted: string;
  reviewer: number;
  reviewed: number;
}

export class ReviewReadModel {
  id: number;
  rate: number;
  description: string;
  date_posted: string;
  reviewer: UserModel;
  reviewed: UserModel;
}





