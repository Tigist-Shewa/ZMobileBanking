import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import * as $ from "jquery";

/**
 * Generated class for the ForeignCurrencyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-foreign-currency',
  templateUrl: 'foreign-currency.html',
})
export class ForeignCurrencyPage {

  posts:any
header:any

img:string[];
      currency:string[];
     currName:string[]
      cashBuying: string[]
     cashSelling: string[]
       trnBuying: string[]
      trnSelling: string []

currencies: Array<{ image: string, currency: string,currName:string, cashBuying: string,  cashSelling: string, trnBuying: string,  trnSelling: string }>  =  Array()

  constructor(private inAppBrowser: InAppBrowser,public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForeignCurrencyPage');
    //this.inAppBrowser.create("https://market.nbebank.com/market/banks/index.php");
    this.http.get('https://combanketh.et/exchange-rate-detail/', {responseType: "text"}).subscribe(data => {
      this.posts = data
      let dom_nodes = $($.parseHTML(this.posts));
      console.log("parsed",dom_nodes)
      let table_node = dom_nodes.find('tbody')[0]


     // let currency: {string }[]

      for (const child of table_node.children) {
        //console.log(child.children[1].innerHTML);


        this.currencies.push({
          image: "https://combanketh.et/"+ child.children[0].children[0].dataset.lazySrc,
           currency:child.children[1].innerHTML,
           currName: child.children[2].innerHTML,
           cashBuying: child.children[3].innerHTML,
           cashSelling: child.children[4].innerHTML,
           trnBuying: child.children[5].innerHTML,
           trnSelling: child.children[6].innerHTML
           })

      }

      /*table_node.forEach(element => {
        console.log("tr:",element)
      });*/
      console.log("parsed-table",table_node)
      console.log("curencies",this.currencies)

    },
    err=>console.log("error", err),
          () => console.log("done" ) );



  }

}
