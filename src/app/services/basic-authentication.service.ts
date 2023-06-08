import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username, password){
    if(username ==="Ken" && password === "lee"){
      sessionStorage.setItem('authenticaterUser',username);
      return true;
    }else{
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser');
  }

  executeAuthenticationService(username, password){
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`
                                          ,{headers: headers}
                                        ).pipe(
                                          map(
                                            data => {
                                              sessionStorage.setItem('authenticaterUser', username);
                                              return data;
                                            }
                                          )
                                        );
  }

}

export class AuthenticationBean{
  constructor(public message:string){}
}