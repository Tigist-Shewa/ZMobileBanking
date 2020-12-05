import { AccountSummaryHomePage } from './../account-summary-home/account-summary-home';
import { Component, OnInit } from '@angular/core';
import { DateTime, IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-homepage',
  templateUrl: 'homepage.html',
})
export class HomePagePage {
  accountList = [];
  groupAcconts = [];
name:any;
img:string;
imge:any;
today:any;
 myDate :Date;
 greet:any;
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
        this.img=acctData.img;
    }
    this.groupAccountsByCategory();
    console.log(this.groupAcconts);
    this.myDate = new Date();
    let hrs = this.myDate.getHours();
    if (hrs < 12){
        this.greet = 'Good Morning!!';}
    else if (hrs >= 12 && hrs <= 17){
        this.greet = 'Good Afternoon!!';}
    else if (hrs >= 17 && hrs <= 24){
        this.greet = 'Good Evening!!';}

        this.today = Date.now();
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
  ViewAccount(){
    this.navCtrl.push(AccountSummaryHomePage);
  }

}
