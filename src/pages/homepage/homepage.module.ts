import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePagePage } from './homepage';

@NgModule({
  declarations: [
    HomePagePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePagePage),
  ],
})
export class HomepagePageModule {}
