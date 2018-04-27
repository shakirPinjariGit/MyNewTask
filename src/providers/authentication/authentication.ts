import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthenticationProvider Provider');
  }

  register(email,password) {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  login(email,password) {
      return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  loginAsGuest() {
      return firebase.auth().signInAnonymously();
  }

  logout() {
      return firebase.auth().signOut();
  }

}
