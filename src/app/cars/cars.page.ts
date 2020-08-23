import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class carsPage implements OnInit {
  currentUser: User;

  constructor(private authenticationService: AuthService) { 
    this.currentUser = this.authenticationService.currentUserValue;
  }



  ngOnInit() {
  }

}
