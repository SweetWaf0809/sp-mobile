import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MyHttpService} from '../../app/utility/service/myhttp.service'
import {ModalController} from 'ionic-angular'
import {PayPage} from '../pay/pay'

/**
 * Generated class for the OrderConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-confirm',
  templateUrl: 'order-confirm.html',
})
export class OrderConfirmPage {
list=[]
  constructor(
    private modalCtrl:ModalController,
    private myService:MyHttpService,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderConfirmPage');
    var url="http://127.0.0.1:3000/cart/list"
    this.myService.sendGetRequest(
      url,
      (result)=>{
        console.log(result)
        //将result.data保存起来
        this.list=result.data
      }
    )
  }
//通过模态窗的方式来显示支付页面ModalController
showPay(){
  var myModal=this.modalCtrl.create(PayPage)
  myModal.present()
  myModal.onDidDismiss((data)=>{
    if(data==1){
      //支付完成，跳转首页
      this.navCtrl.parent.select(0)
    }
  })
}

//按钮添加事件
btnRight(){
  console.log(123)
  }
 
   btnLeft(){
   console.log(124)
    }
}
