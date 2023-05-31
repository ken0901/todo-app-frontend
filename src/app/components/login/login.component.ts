import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.username==="Ken" && this.password === "lee"){
      this.route.navigate(['welcome',this.username]);
      this.invalidLogin = false;
    }else {
      this.invalidLogin = true;
    }
  }

}
