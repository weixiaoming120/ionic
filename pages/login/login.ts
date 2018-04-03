///<reference path="../../services/jquery.d.ts"/>  
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import { RegistPage } from '../regist/regist';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  goRegist(){
    this.navCtrl.push(RegistPage);
  }
  login() {
    let alert = this.alertCtrl.create({
      
      subTitle: '登陆成功！',
      buttons: ['确定']
    });
   
    $('#loginbutton').click(function(){
			$.ajax({
				type:'get',
				url:'http://datainfo.duapp.com/shopdata/userinfo.php',
				data:{
						status:"login",
						userID:document.getElementById('username'),
						password:document.getElementById('pw'),
					},
				dataType:'json',
				success:function(data){					
					if(data==0){
						alert.present();
					}

					else{
						window.location.href='index.html';
						alert.present();						
					}
			    },
				error:function(){
          alert.present();
				}
			})
		})

  }

   
}
