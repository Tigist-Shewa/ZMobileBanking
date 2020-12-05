import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountSummaryHomePage } from './account-summary-home';

@NgModule({
  declarations: [
    AccountSummaryHomePage,
  ],
  imports: [
    IonicPageModule.forChild(AccountSummaryHomePage),
  ],
})
export class AccountSummaryHomePageModule {}
