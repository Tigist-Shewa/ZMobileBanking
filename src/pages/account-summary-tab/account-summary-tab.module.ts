import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountSummaryTabPage } from './account-summary-tab';

@NgModule({
  declarations: [
    AccountSummaryTabPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountSummaryTabPage),
  ],
})
export class AccountSummaryTabPageModule {}
