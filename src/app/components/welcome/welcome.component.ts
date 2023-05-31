import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message: string = 'Some Weclome Message';
  name: string = '';

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
  }

}
