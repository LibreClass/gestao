import { Injectable } from '@angular/core';
import { SERVER_API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})

export class TokenAuthService {

  private URL: string = SERVER_API_URL + 'api/auth/';

  private tokenIssuer = {
    login: this.URL + 'signin',
    register: this.URL + 'signup'
  }

  constructor() {}

  // TODO: Refresh token

  setTokenStorage(token: any) {
    localStorage.setItem('auth_token', token);
  }

  getJwtToken() {
    return localStorage.getItem('auth_token');
  }

  validateToken() {
    const token = this.getJwtToken();
    if (token && token != null) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.tokenIssuer).indexOf(payload.iss) > -1 ? true : false;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  payload(token: any) {
    const jwtPayload = token.split('.')[1];
    return JSON.parse(atob(jwtPayload));
  }

  isSignedin() {
    return this.validateToken();
  }

  destroyToken() {
    localStorage.removeItem('auth_token');
  }

}
