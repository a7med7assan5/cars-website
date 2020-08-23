import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.loginPageModule),
  },

  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.signupPageModule),
  },
  // Tabs
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.homePageModule),
  },
  {
    path: 'cars',
    loadChildren: () => import('./cars/cars.module').then(m => m.carsPageModule),
  },
  {
    path: 'addCar',
    loadChildren: () => import('./addCar/addCar.module').then(m => m.addCarPageModule),
  },


  //Settings
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'settings/change-email',
    loadChildren: () => import('./change-email/change-email.module').then(m => m.changeEmailPageModule),
  },
  {
    path: 'settings/change-password',
    loadChildren: () => import('./change-password/change-password.module').then(m => m.changePasswordPageModule),
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
