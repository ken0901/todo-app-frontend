import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from 'src/app/services/basic-authentication.service';
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
              private hardcodedAuthenticatetionService: HardcodedAuthenticationService,
              private authenticationService: BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.hardcodedAuthenticatetionService.authenticate(this.username, this.password)){
      this.route.navigate(['welcome',this.username]);
      this.invalidLogin = false;
    }else {
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin(){
    this.authenticationService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.route.navigate(['welcome',this.username]);
          this.invalidLogin = false;
        },
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      )
  }

}
