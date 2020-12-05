import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
@IonicPage()
@Component({
  selector: 'page-nearest-atm',
  templateUrl: 'nearest-atm.html',
})
export class NearestAtmPage {

  constructor(public navCtrl: NavController,private inAppBrowser: InAppBrowser, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }
  redirect() {
    this.inAppBrowser.create("https://www.zemenbank.com/atm-locations");
   }

}
