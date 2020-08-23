import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class homePage implements OnInit {
  currentUser: User;

  constructor(private authenticationService: AuthService) { 
    this.currentUser = this.authenticationService.currentUserValue;
  }



  ngOnInit() {
  }

}
