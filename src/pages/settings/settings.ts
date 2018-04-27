import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  artLimit:Number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter SettingsPage');
    if(window.localStorage.getItem("article_limit")!=undefined)
      this.artLimit=parseInt(window.localStorage.getItem("article_limit"));
  }

  limitSelected(){
    window.localStorage.setItem('article_limit', this.artLimit.toString());
  }

}
