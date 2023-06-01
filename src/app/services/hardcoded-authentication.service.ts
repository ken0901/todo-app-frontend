import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
    if(username ==="Ken" && password === "lee"){
      return true;
    }else{
      return false;
    }
  }
}
