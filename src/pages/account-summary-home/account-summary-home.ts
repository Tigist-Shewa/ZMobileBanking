import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePagePage } from './../homepage/homepage';
@IonicPage()
@Component({
  selector: 'page-accountsummaryhome',
  templateUrl: 'account-summary-home.html',
})
export class AccountSummaryHomePage {
  accountList = [];
  groupAcconts = [];
  name:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountsummaryhomePage');
  }

  ngOnInit(): void {

    console.log(this.navParams.data);

    console.log(this.accountList);

    if (this.navParams != null &&
        this.navParams.data != null &&
        this.navParams.data.accountList != null) {
      localStorage.setItem('savedAcctData', JSON.stringify(this.navParams.data));
      console.log(this.accountList);
    }
    if (localStorage.getItem('savedAcctData') != null) {
        var acctData = JSON.parse(localStorage.getItem('savedAcctData'));
        console.log(acctData.accountList);
        this.accountList = acctData.accountList;
        this.name=acctData.fullName;
    }
    this.groupAccountsByCategory();

    console.log("888999 60002 groupAcconts is ");
    console.log(this.groupAcconts);
  }
  groupAccountsByCategory(){

    if (this.accountList == null || this.accountList.length == 0) {
      return;
    }
    if (this.accountList.length > 0){

      let currentCategory = '';
      let currentAccounts = [];
      this.accountList.forEach(account => {
        if (account.category != currentCategory) {
          currentCategory = account.category;

          let newGroup = {
            category: currentCategory,
            accounts: []
          }

          currentAccounts = newGroup.accounts;
          this.groupAcconts.push(newGroup);
        }
        currentAccounts.push(account);
      });

    }

  }
  homePage(){
    this.navCtrl.setRoot(HomePagePage);

      }

}
