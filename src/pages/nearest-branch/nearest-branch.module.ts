import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NearestBranchPage } from './nearest-branch';

@NgModule({
  declarations: [
    NearestBranchPage,
  ],
  imports: [
    IonicPageModule.forChild(NearestBranchPage),
  ],
})
export class NearestBranchPageModule {}
