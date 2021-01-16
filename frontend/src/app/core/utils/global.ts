export const global = {
  getToken(): string {
    return localStorage.getItem('token');
  },
  setToken(token: string): void {
    localStorage.setItem('token', token);
  },

  getTokenExpiration(): string {
    return localStorage.getItem('expires_at');
  },
  setTokenExpiration(expiresAt: string): void {
    localStorage.setItem('expires_at', expiresAt);
  },

  getUserId(): string {
    return localStorage.getItem('user_id');
  },
  setUserId(userId: string): void {
    localStorage.setItem('user_id', userId);
  },

  clear(): void {
    localStorage.clear();
  }
};
