import { ResponseLogin } from './../models/ResponseLogin';
import { RequestLogin } from '../models/RequestLogin';
import { Injectable } from '@angular/core';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //private readonly LOGIN_URI = "../../assets/sample-response-login.json";
  private readonly LOGIN_URI = "http://localhost:8080/api/login";

  constructor(private http: HttpClient) { }

  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.http.post<ResponseLogin>(this.LOGIN_URI, requestLogin);
  }
}
