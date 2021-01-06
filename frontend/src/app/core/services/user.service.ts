// import {Injectable} from '@angular/core';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
//
// @Injectable()
// export class UserService {
//
//   // http options used for making API calls
//   private httpOptions: any;
//
//   // the actual JWT token
//   public token: string;
//
//   // the token expiration date
//   public tokenExpires: Date;
//
//   // the username of the logged in user
//   public username: string;
//
//   // error messages received from the login attempt
//   public errors: any = [];
//
//   constructor(private http: HttpClient) {
//     this.httpOptions = {
//       headers: new HttpHeaders({'Content-Type': 'application/json'})
//     };
//   }
//
//   // Uses http.post() to get an auth token from djangorestframework-jwt endpoint
//   public login(user): void {
//     this.http.post('/api-token-auth/', JSON.stringify(user), this.httpOptions).subscribe(
//       data => {
//         this.updateData(data['token']);
//       },
//       err => {
//         this.errors = err['error'];
//       }
//     );
//   }
//
//   // Refreshes the JWT token, to extend the time the user is logged in
//   public refreshToken(): void {
//     this.http.post('/api-token-refresh/', JSON.stringify({token: this.token}), this.httpOptions).subscribe(
//       data => {
//         this.updateData(data['token']);
//       },
//       err => {
//         this.errors = err['error'];
//       }
//     );
//   }
//
//   public logout(): void {
//     this.token = null;
//     this.tokenExpires = null;
//     this.username = null;
//   }
//
//   private updateData(token): void {
//     this.token = token;
//     this.errors = [];
//
//     // decode the token to read the username and expiration timestamp
//     const tokenParts = this.token.split(/\./);
//     const tokenDecoded = JSON.parse(window.atob(tokenParts[1]));
//     this.tokenExpires = new Date(tokenDecoded.exp * 1000);
//     this.username = tokenDecoded.username;
//   }
// }
