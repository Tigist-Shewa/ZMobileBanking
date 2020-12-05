import { NoteService } from './../providers/note-service';
import { HttpClientModule } from '@angular/common/http';
import { ViewNotePage } from './../pages/view-note/view-note';
import { AddNotePage } from './../pages/add-note/add-note';
import { NotePage } from './../pages/note/note';
import { HomePagePage } from './../pages/homepage/homepage';
import { NearestBranchPage } from './../pages/nearest-branch/nearest-branch';
import { NearestAtmPage } from './../pages/nearest-atm/nearest-atm';
import { ForeignCurrencyPage } from './../pages/foreign-currency/foreign-currency';
import { SwiftTransferPage } from './../pages/swift-transfer/swift-transfer';
import { AccountSummaryHomePage } from '../pages/account-summary-home/account-summary-home';
import { AccountSummaryTabPage } from '../pages/account-summary-tab/account-summary-tab';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AgmCoreModule } from "@agm/core";
import { LoginPage } from '../pages/login/login';
import { TransferPage } from '../pages/transfer/transfer';
import { BillsPage } from '../pages/bills/bills';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ZemenProfilePage } from '../pages/zemen-profile/zemen-profile';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {IonicStorageModule} from '@ionic/Storage';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AccountSummaryTabPage,
    AccountSummaryHomePage,
    TransferPage,
    BillsPage,
    SwiftTransferPage,
    ForeignCurrencyPage,
    NearestBranchPage,
    NearestAtmPage,
    ZemenProfilePage,
    HomePagePage,
    NotePage,
    AddNotePage,
    ViewNotePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBVoptlxl2os2L0mFjIM6A9RSE_E8ODn8M'
    })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AccountSummaryTabPage,
    AccountSummaryHomePage,
    TransferPage,
    BillsPage,
    SwiftTransferPage,
    ForeignCurrencyPage,
    NearestBranchPage,
    NearestAtmPage,
    ZemenProfilePage,
    HomePagePage,
    NotePage,
    ViewNotePage,
    AddNotePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
NoteService,
Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
