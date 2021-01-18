import {UserModel} from '@core/models/user.model';

export class UserProfileModel {
  user: number;
  biography: string;
  avatar: string;
}

export class UserProfileReadModel {
  user: UserModel;
  biography: string;
  avatar: string;
}
