import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MyHttpService} from '../../app/utility/service/myhttp.service'
import {LoginPage} from '../login/login'
import {OrderConfirmPage} from '../order-confirm/order-confirm'

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  list=[]//保存服务器端所返回的购物车列表
  isAllSelected=false //与复选框做一个双向绑定

  constructor(
    private myService:MyHttpService,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    console.log('ionViewDidLoad CartPage');
    var url="http://127.0.0.1:3000/cart/list"
    this.myService.sendGetRequest(
      url,
      (result)=>{
        console.log(result)
        if(result.code==300){
          //跳转到login
          console.log(111)
          this.navCtrl.push(LoginPage)
        }else if(result.code==200){
          //将result.data保存起来，到视图中进行调用
          this.list=result.data
         console.log(222)
         console.log(result)
          //处理list:遍历list当中的每一个对象，添加一个属性isSelected
          for(var i=0;i<this.list.length;i++){
            this.list[i].isSelected=false
          }
        }
      }
    )
  }

  //处理全选
  handleSelectAll(){
    //遍历list,将每一个对象的isSelected都改为isAllSelected
    for(var i=0;i<this.list.length;i++){
      this.list[i].isSelected=this.isAllSelected
    }
  }
//处理购物车列表的商品在被操作选中或者取消选中时的处理函数
handleSelect(){
  //执行一个逻辑与运算，并将结果保存在isSelected
  var result=true;
  for(var i=0;i<this.list.length;i++){
    result=result&&this.list[i].isSelected
  }
  this.isAllSelected=result


}
//


//计算选中商品的总价格
calcAll(){
  var totalPrice=0
  for(var i=0;i<this.list.length;i++){
    var p=this.list[i]
    if(p.isSelected){
      totalPrice+=(p.price*p.count)
    }
  }
  return totalPrice
}
//跳转到订单确认页面
jump(){
  this.navCtrl.push(OrderConfirmPage)
}
}
