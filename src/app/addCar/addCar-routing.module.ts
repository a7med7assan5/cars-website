import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { addCarPage } from './addCar.page';

const routes: Routes = [
  {
    path: '',
    component: addCarPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class addCarPageRoutingModule {}
