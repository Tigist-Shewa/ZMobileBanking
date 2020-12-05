import { HomePagePage } from './../homepage/homepage';
import { Component, ViewChild } from '@angular/core';
import { Nav, IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountSummaryHomePage } from '../account-summary-home/account-summary-home';
@IonicPage()
@Component({
  selector: 'page-accountsummarytabs',
  templateUrl: 'account-summary-tab.html',
})
export class AccountSummaryTabPage {
   @ViewChild(Nav) nav: Nav;
  tab2Root = AccountSummaryHomePage;
  tab1Root = HomePagePage;
  rootParamsData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootParamsData = navParams;
    console.log(this.rootParamsData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountSummaryTabPage');
  }

  ngOnInit(): void {

    console.log(this.navParams.data);
  }
  goAccSum(){

this.navCtrl.setRoot(AccountSummaryHomePage);
  }
}
