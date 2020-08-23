import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-addCar',
  templateUrl: './addCar.page.html',
  styleUrls: ['./addCar.page.scss'],
})
export class addCarPage implements OnInit {
  currentUser: User;

  constructor(private authenticationService: AuthService) { 
    this.currentUser = this.authenticationService.currentUserValue;
  }



  ngOnInit() {
  }

}
