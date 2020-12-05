import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForeignCurrencyPage } from './foreign-currency';

@NgModule({
  declarations: [
    ForeignCurrencyPage,
  ],
  imports: [
    IonicPageModule.forChild(ForeignCurrencyPage),
  ],
})
export class ForeignCurrencyPageModule {}
