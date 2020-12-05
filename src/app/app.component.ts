import { NotePage } from './../pages/note/note';
import { ZemenProfilePage } from './../pages/zemen-profile/zemen-profile';
import { NearestBranchPage } from './../pages/nearest-branch/nearest-branch';
import { ForeignCurrencyPage } from './../pages/foreign-currency/foreign-currency';
import { SwiftTransferPage } from './../pages/swift-transfer/swift-transfer';
import { TransferPage } from './../pages/transfer/transfer';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { BillsPage } from '../pages/bills/bills';
import { NearestAtmPage } from '../pages/nearest-atm/nearest-atm';
import { AccountSummaryHomePage } from '../pages/account-summary-home/account-summary-home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = LoginPage;

  pages: Array<{title: string, component: any, icon: string}>;
  activePage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {

      statusBar.styleDefault();
      setTimeout(() => {
        splashScreen.hide();
      }, 100);
    });
    this.pages = [
      { title: 'Accounts', component: AccountSummaryHomePage, icon: 'assets/imgs/accmenu.png' },
      { title: 'Transfer', component: TransferPage, icon: 'assets/imgs/trans.png' },
      { title: 'Bills', component: BillsPage, icon: 'assets/imgs/billm.png' },
      { title: 'Swift Transfer', component: SwiftTransferPage, icon: 'assets/imgs/swiftt.png' },
      { title: 'Foreign Currency', component: ForeignCurrencyPage, icon: 'assets/imgs/curr.png' },
      { title: 'Map View', component: NearestBranchPage, icon: 'assets/imgs/nearb.png' },
      { title: 'Nearest ATM', component: NearestAtmPage, icon: 'assets/imgs/zemenatmm.png'},
      { title: 'My Notes', component: NotePage, icon: 'assets/imgs/zemenb.png' },
      { title: 'Zemen Profile', component: ZemenProfilePage, icon: 'assets/imgs/zemenb.png' },
      { title: 'Logout', component: LoginPage, icon: 'assets/imgs/Logout.png' }
    ];

    this.activePage = this.pages[0];
  }

  openPage(page) {
    this.nav.setRoot(page.component);
    this.activePage = page;
    if (page.title == 'Logout') {
      localStorage.clear();
      this.activePage = this.pages[0];
    }
  }

  checkActive(page) {
    return page == this.activePage;
  }
}
