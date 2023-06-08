import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { API_URL } from '../constants/app.constants';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticaterUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  // hardcoded 
  authenticate(username, password){
    if(username ==="Ken" && password === "lee"){
      sessionStorage.setItem(AUTHENTICATED_USER,username);
      return true;
    }else{
      return false;
    }
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser()){
      return sessionStorage.getItem(TOKEN);
    }
    return null;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }

  executeAuthenticationService(username, password){
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`
                                          ,{headers: headers}
                                        ).pipe(
                                          map(
                                            data => {
                                              sessionStorage.setItem(AUTHENTICATED_USER, username);
                                              sessionStorage.setItem(TOKEN, basicAuthHeaderString);
                                              return data;
                                            }
                                          )
                                        );
  }

}

export class AuthenticationBean{
  constructor(public message:string){}
}