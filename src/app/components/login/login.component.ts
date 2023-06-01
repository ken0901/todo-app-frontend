import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from 'src/app/services/hardcoded-authentication.service';

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

  constructor(private route: Router,
              private authenticatetionService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.authenticatetionService.authenticate(this.username, this.password)){
      this.route.navigate(['welcome',this.username]);
      this.invalidLogin = false;
    }else {
      this.invalidLogin = true;
    }
  }

}
