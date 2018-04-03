import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SubpagePage } from '../subpage/subpage';
import { LoginPage } from '../login/login';
import { RegistPage } from '../regist/regist';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }
  goSub(){
    this.navCtrl.push(SubpagePage,{name:'liu'});
  }
  
goBack(){

  this.navCtrl.push(RegistPage);
}
}
