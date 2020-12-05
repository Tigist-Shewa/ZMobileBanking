import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwiftTransferPage } from './swift-transfer';

@NgModule({
  declarations: [
    SwiftTransferPage,
  ],
  imports: [
    IonicPageModule.forChild(SwiftTransferPage),
  ],
})
export class SwiftTransferPageModule {}
