import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { TranslateConfigService } from './services/translate-config.service';
import { AlertService } from './services/alert.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  currentUser: User;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthService,
    private translateConfigService: TranslateConfigService,
    private alertservice: AlertService
  ) {
    this.initializeApp();
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.platform.ready().then(() => {
      this.translateConfigService.setLanguage(localStorage["myConfig"]);
    });

  }
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
