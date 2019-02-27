import { Component } from '@angular/core';
import {ToastController, IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http'
import {AddCartPage} from '../add-cart/add-cart'
import {CartPage} from '../cart/cart'
import {NotFoundPage} from '../not-found/not-found'
import {MyHttpService} from '../../app/utility/service/myhttp.service'
import {LoginPage} from '../login/login'


/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  cart=CartPage
  notFound=NotFoundPage
details={}//保存服务器端所返回的数据
//轮播图片信息
// list=[
//   {id:1,img_url:"http://127.0.0.1:3000/2019-01-05_101605.png",title:"Nutrilon牛栏 荷兰奶粉1段850g",new_price:156,ori_price:199,weight:0.9,count:2},
//   {id:2,img_url:"http://127.0.0.1:3000/2019-01-05_101457.png",title:"Hero Baby荷兰美素白金版婴幼儿配方牛奶粉3段(1岁以上) 700g",new_price:109.5,ori_price:168,weight:0.8,count:2},
//   {id:3,img_url:"http://127.0.0.1:3000/2019-01-05_101646.png",title:"Hipp喜宝 德国有机奶粉12+段800g",new_price:102,ori_price:199,weight:0.9,count:4},

// ]

  constructor(
    private toastCtrl:ToastController,
    private myService:MyHttpService,
    private myHttp:HttpClient,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
    //接收参数
    console.log(this.navParams.get('id'))
    //向服务器请求指定id对应的详情数据
    var url="http://127.0.0.1:3000/sale/details?lid="+this.navParams.get("id")
    this.myHttp.get(url).subscribe((result:any)=>{
     // console.log(result)
      //保存数据到视图中显示
     // console.log(1111)
     // console.log(result)
     // console.log(result.details)
      this.details=result.details;
    })
  }


  //加入购物车
  addToCart(){
    //请求，根据请求结果做处理
    var url="http://127.0.0.1:3000/cart/add?buyCount=1&lid="+this.navParams.get('id')
    //调用服务中的方法发起网络请求
    console.log(this.navParams.get('id'))
    this.myService.sendGetRequest(
      url,
      (result:any)=>{
        console.log(result)
        //code是300，显示一个toast通知
        if(result.code==300){
          var myToast=this.toastCtrl.create({
            message:"添加失败",
            duration:1500
          })
          myToast.present();
          //跳转到登录页面
          this.navCtrl.push(LoginPage)
        }
      }
    )
  }
 

jump(){
  //请选择 跳转
  this.navCtrl.push(AddCartPage)
}
}
