import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NearestAtmPage } from './nearest-atm';

@NgModule({
  declarations: [
    NearestAtmPage,
  ],
  imports: [
    IonicPageModule.forChild(NearestAtmPage),
  ],
})
export class NearestAtmPageModule {}
