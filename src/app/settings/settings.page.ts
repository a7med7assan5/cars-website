import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { TranslateConfigService } from '../services/translate-config.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  currentUser: User;
  selectedLanguage: any;
  DefaultLangValue: string;
  returnUrl: string;
  constructor(private app: AppComponent, private translateConfigService: TranslateConfigService, private authenticationService: AuthService,
    public router: Router, private alertservice: AlertService) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.currentUser = this.authenticationService.currentUserValue;
  }


  languageChanged() {
    this.translateConfigService.setLanguage(this.selectedLanguage);
    localStorage.setItem("myConfig", this.selectedLanguage);
  }
  
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
    this.alertservice.showAlert2("&#xE876;", "success", "You have successfully logged out!");
  }

  ngOnInit() {
  }

}
