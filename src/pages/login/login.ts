import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { AuthenticationProvider } from './../../providers/authentication/authentication';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  formData = {emailAddress:"",password:""};
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public nav: NavController, public auth:AuthenticationProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginUser(){
    console.log("Working....");
    // this.auth.login(this.formData.emailAddress,this.formData.password)
    // .then(response => {
    //     console.log("Login Output:",response);
    //     this.nav.push(TabsPage);
    // })
    // .catch(error => {
    //     // handle error by showing alert
    // })
    this.nav.push(TabsPage);
  }
  
  goToSignup(){
    console.log("Working....");
    this.nav.push(RegisterPage);
  }
  
}
