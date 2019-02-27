import { Component } from '@angular/core';
import {ViewController, IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http'
import {CartPage} from '../cart/cart'
/**
 * Generated class for the AddCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-cart',
  templateUrl: 'add-cart.html',
})
export class AddCartPage {
count=2
  constructor(
    private myHttp:HttpClient,
    private viewCtrl:ViewController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCartPage');
  }
//关闭模态窗口
closeModal(){
  //将ViewController实例化，并调用dismiss
  this.viewCtrl.dismiss()
}
//按钮添加事件
btnRight(){
 this.count++;
  }

  btnLeft(){
    if(this.count>0){
      this.count--;
    }
    }
//跳转购物车
addCart(){
this.navCtrl.push(CartPage)
}
}
