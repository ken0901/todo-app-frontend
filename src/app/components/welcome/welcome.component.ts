import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from 'src/app/services/data/welcome-data.service';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message: string = 'Some Weclome Message';
  name: string = '';
  welcomeMessageFromService: String = '';

  constructor(private route:ActivatedRoute,
              private welcomeService: WelcomeDataService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];

  }
  
  getWelcomeMessage(){
    this.welcomeService.executeHelloWorldBeanService().subscribe(
      response => this.handelSuccessfulResponse(response),
      error => this.handelErrorResponse(error)
    );
  }

  handelSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message;
  }

  handelErrorResponse(error){
    this.welcomeMessageFromService = error.error.message;
  }
}
