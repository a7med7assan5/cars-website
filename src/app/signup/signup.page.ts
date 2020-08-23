import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class signupPage implements OnInit {
  currentUser: User;

  constructor(private authenticationService: AuthService) { 
    this.currentUser = this.authenticationService.currentUserValue;
  }



  ngOnInit() {
  }

}
