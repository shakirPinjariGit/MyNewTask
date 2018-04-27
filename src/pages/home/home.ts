import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { LoadingController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  start:Number=0;
  end:Number;
  artCategory:String="sports";
  articleList:any={data:{children:[]}};
  apiProvider:ApiProvider;
  

  constructor(public navCtrl: NavController, apiProvider:ApiProvider,public loadingCtrl: LoadingController) {
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    window.localStorage.setItem('article_category', this.artCategory.toString());
    
    loader.present();
    this.apiProvider=apiProvider;
    let tempList = this.apiProvider.getArticlesByUrl(this.artCategory);
    tempList
    .subscribe(data => {
      this.articleList = data;
      console.log("List :",data);
    });
    loader.dismiss();
  }

  categorySelected(){
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    window.localStorage.setItem('article_category', this.artCategory.toString());
    loader.present();
    let tempList = this.apiProvider.getArticlesByUrl(this.artCategory);
    tempList
    .subscribe(data => {
      this.articleList = data;
      console.log("New List :",data);
    });
    loader.dismiss();
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter HomPage');
    if(window.localStorage.getItem("article_limit")!=undefined)
      this.end=parseInt(window.localStorage.getItem("article_limit"));
  }
}
