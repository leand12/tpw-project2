import {UserModel} from '@core/models/user.model';

export interface UserProfileModel {
  user: number;
  biography?: string;
  avatar?: string;
}

export interface UserProfileReadModel {
  user: UserModel;
  biography: string;
  avatar: string;
}
