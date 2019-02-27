import { Component } from '@angular/core';
import {ToastController, IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http'

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
//和表单元素做一个双向数据绑定
myName=""
myPwd=""
  constructor(
    private toastCtrl:ToastController,
    private myHttp:HttpClient,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  //登录
  login(){
   console.log(this.myName,this.myPwd)
    //发送给服务器校验
    var url="http://127.0.0.1:3000/login/user"
    this.myHttp.post(
      url,
      {uname:this.myName,upwd:this.myPwd},
      {withCredentials:true}
    ).subscribe((result:any)=>{
//console.log(result)
//登录成功，返回上一页；登录失败，显示toast:'用户名或密码有误'
if(result.code==200){
  this.navCtrl.pop()
}else{
  var myToast=this.toastCtrl.create({
message:'用户名或密码有误',
duration:3000
  });
  myToast.present()
}
    })
  }
}
