import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthenticationProvider } from './../../providers/authentication/authentication';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  registerData = {emailAddress:"",password:""};
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth:AuthenticationProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser(){
    this.auth.register(this.registerData.emailAddress,this.registerData.password)
    .then(response => {
        console.log("Login Output:",response);
        this.navCtrl.pop();
    })
    .catch(error => {
        // handle error by showing alert
    })
  }

  goToLogin(){
    this.navCtrl.pop();
  }

  resetAllData(){
    this.registerData = {emailAddress:"",password:""};
  }

}
