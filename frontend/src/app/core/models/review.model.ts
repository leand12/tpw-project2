import {UserModel} from '@core/models/user.model';

export interface ReviewModel {
  id?: number;
  rate: number;
  description?: string;
  date_posted?: string;
  reviewer?: number;
  reviewed: number;
}

export interface ReviewReadModel {
  id: number;
  rate: number;
  description: string;
  date_posted: string;
  reviewer: UserModel;
  reviewed: UserModel;
}





