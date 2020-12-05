import { HomePagePage } from './../homepage/homepage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-swift-transfer',
  templateUrl: 'swift-transfer.html',
})
export class SwiftTransferPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SwiftTransferPage');
  }
  homePage(){
this.navCtrl.setRoot(HomePagePage);

  }

}
