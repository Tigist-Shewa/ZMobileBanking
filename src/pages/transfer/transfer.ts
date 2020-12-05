import { HomePagePage } from './../homepage/homepage';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AccountSummaryHomePage } from '../account-summary-home/account-summary-home';
@IonicPage()
@Component({
  selector: 'page-transfer',
  templateUrl: 'transfer.html',
})
export class TransferPage {

  @ViewChild('txtCard')ac ;
  @ViewChild('txtPassword')tt;
  @ViewChild('txtPassword')amt;
  testRadioOpen: boolean;
  testRadioResult;
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferPage');
  }
  showConfirm() {
    if (typeof document.getElementsByClassName("ac")[0] != 'object' ||typeof document.getElementsByClassName("tt")[0] != 'object'||typeof document.getElementsByClassName("amt")[0] != 'object'){
    alert("Please input All Requird Information!!");
    return;}

    /*if (this.ac.value.trim().length == 0 ||
    this.tt.value.trim().length == 0|| this.amt.value.trim().length == 0) {
      alert("Please input All Requird Information!!");
      return;
}*/
    const confirm = this.alertCtrl.create({
      title: 'Are You Sure?',
      message: 'Do you want to pass this Transaction?',
      buttons: [
        {
          text: 'I Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'I Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

showHome(){
  this.navCtrl.push(HomePagePage);

}
showSum(){
  this.navCtrl.push(AccountSummaryHomePage);

}
homePage(){
  this.navCtrl.setRoot(HomePagePage);

    }

}
