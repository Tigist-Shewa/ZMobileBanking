import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-zemen-profile',
  templateUrl: 'zemen-profile.html',
})
export class ZemenProfilePage {

  constructor(public navCtrl: NavController,private inAppBrowser: InAppBrowser, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZemenProfilePage');
  }

}
