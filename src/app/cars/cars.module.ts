import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { carsPageRoutingModule } from './cars-routing.module';

import { carsPage } from './cars.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    carsPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [carsPage]
})
export class carsPageModule {}
