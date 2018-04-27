import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import firebase from 'firebase';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      firebase.initializeApp({
        apiKey: "AIzaSyDCdbrGuJOijw7LT2muxD6It3_pfndI9Us",
        authDomain: "mynewtask-9cd7f.firebaseapp.com",
        databaseURL: "https://mynewtask-9cd7f.firebaseio.com",
        projectId: "mynewtask-9cd7f",
        storageBucket: "mynewtask-9cd7f.appspot.com",
        messagingSenderId: "1029212205377"
    });
    });
  }
}
