import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "Ken";
  password: string = "";
  errorMsg: string = "Invalid Credentials";
  invalidLogin: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.username==="Ken" && this.password === "lee"){
      this.invalidLogin = false;
    }else {
      this.invalidLogin = true;
    }
  }

}
