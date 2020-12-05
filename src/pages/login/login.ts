import { HomePagePage } from './../homepage/homepage';
import { AccountSummaryTabPage } from './../account-summary-tab/account-summary-tab';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomerAuthService } from '../../providers/customer-auth/customer-auth';
import { ZemenPlinkService } from '../../providers/svc.zemenPlink';
import { User } from '../../providers/user/user';
import { AlertController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:
    [
        CustomerAuthService,
        ZemenPlinkService,
    ]
})
export class LoginPage {
  @ViewChild('txtCard') txtCard;
  @ViewChild('txtPassword') txtPassword;
  public authenticatedUser: User;
  public loginUserZemenCifProfile: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private custAuthService: CustomerAuthService,
    public zemenPlinkService:  ZemenPlinkService,
    public alerCtrl: AlertController
    ) {
  }

  signOn() {

    console.log(this.txtCard.value);
    console.log(this.txtPassword.value);

    if (this.txtCard.value.trim().length == 0 ||
        this.txtPassword.value.trim().length == 0) {
          alert("Please input cif number and password!");
          return;
    }

    var cifNo: number;
    cifNo = parseInt(this.txtCard.value);


    console.log(cifNo);

    this.custAuthService.getAuthenticatedUser(cifNo, this.txtPassword.value)
      .then(user => {
        if (user != null) {
          console.log(user);
          this.authenticatedUser = user;
          this.zemenPlinkService.getZemenCifProfile(user.cifNo)

            .then(zemenacctProfiles =>  {
              this.loginUserZemenCifProfile = zemenacctProfiles;

              console.log(zemenacctProfiles);
              let alert = this.alerCtrl.create({
                cssClass:'loginalert',
                title: 'Successfully Logged In',
                message: 'You are now in Your Mobile Banking Enviroment',

                buttons: ['Ok']

              });
              alert.present();
              this.navCtrl.setRoot(AccountSummaryTabPage, zemenacctProfiles);
            })

        }
        else {
          alert("This user [" + cifNo +"] not found or password not matched!");
        }

      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
