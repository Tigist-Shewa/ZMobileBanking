import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZemenProfilePage } from './zemen-profile';

@NgModule({
  declarations: [
    ZemenProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ZemenProfilePage),
  ],
})
export class ZemenProfilePageModule {}
