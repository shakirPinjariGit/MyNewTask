# MyNewTask
Simple firebase login with listing of articles

## About the App
This is Ionic 3 App which has integrated with the firebase authentication and listing of Reddit Articles Api.
App Contains 5 Pages:
### 1.Login
Login page has implemented firebase authentication, so that user can login by using email id registered with.
### 2.Register
 Register page has implemented firebase registration, so that user can register by using email address and password.
### 3.Home Tab
List of articles has been displayed here with filter on the top to filter the list by category of articles.
### 4.Settings Tab
Shows the dropdown list of options to select the limit to display the number of articles. On change this will save the number to the local storage so it can reflect in the home tab.
### 5.About Tab
Its just a simple page with card to show what app is all about.

## Dependencies
App has used the following external modules.

### 1.Google Firebase Web library for JavaScript:
To install :

    npm install firebase --save

How to initialize:

    You will also need to add an import statement to the top of the app.component.ts file:

    import firebase from 'firebase';

    firebase.initializeApp({
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        databaseURL: "YOUR_DATABASE_URL",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_SENDER_ID"
    });

Calling Firebase Api:

    import firebase from 'firebase';

    register(credentials): Promise {
        return firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password);
    }

    login(credentials): Promise {
        return firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);
    }

    loginAsGuest(): Promise {
        return firebase.auth().signInAnonymously();
    }

    logout(): Promise {
        return firebase.auth().signOut();
    }
