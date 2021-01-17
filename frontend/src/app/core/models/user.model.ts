export class UserModel {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;

  constructor(id?: number) {
    this.id = id;
  }
}
