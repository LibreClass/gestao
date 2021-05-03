import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { SERVER_API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})

export class JwtService {

  private URL: string = SERVER_API_URL + 'api/auth/';

  constructor(private http: HttpClient) {}

  logIn(user: User): Observable<any> {
    return this.http.post<any>(this.URL + 'signin', user);
  }

  logOut(): Observable<any> {
    return this.http.post<any>(this.URL + 'signout', null);
  }

  profile(): Observable<any> {
    return this.http.get(this.URL + 'user');
  }

}