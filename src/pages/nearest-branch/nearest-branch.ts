import { Component , ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var google:any;
@IonicPage()
@Component({
  selector: 'page-nearest-branch',
  templateUrl: 'nearest-branch.html',
})
export class NearestBranchPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

}
