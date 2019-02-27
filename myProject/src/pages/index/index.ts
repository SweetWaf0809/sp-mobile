import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http'
import {DetailsPage} from '../details/details'

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
//定义变量俩保存服务器端所返回轮播图的数据
myData=[]
//定义变量来保存服务器端所返回的整点抢购信息
list=[
  { id: 1, img_url:"http://127.0.0.1:3000/2019-01-05_101457.png",new_price:89,ori_price:198},
  { id: 2, img_url: "http://127.0.0.1:3000/2019-01-05_101457.png", new_price: 89, ori_price: 198 },
  { id: 3, img_url: "http://127.0.0.1:3000/2019-01-05_101457.png", new_price: 89, ori_price: 198 },
  { id: 4, img_url: "http://127.0.0.1:3000/2019-01-05_101457.png", new_price: 89, ori_price: 198 },
  { id: 6, img_url: "http://127.0.0.1:3000/2019-01-05_101457.png", new_price: 89, ori_price: 198 },
  { id: 7, img_url: "http://127.0.0.1:3000/2019-01-05_101457.png", new_price: 89, ori_price: 198 },
  { id: 8, img_url: "http://127.0.0.1:3000/2019-01-05_101457.png", new_price: 89, ori_price: 198 }
]

  constructor(
    private myHttp:HttpClient,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
    var url='http://localhost:3000/getImages'
    this.myHttp.get(url).subscribe((result:any)=>{
      console.log(result)
      //保存数据到当前类中，方便到模板中调用
      this.myData=result;
    })
 
  }
jump(){
  this.navCtrl.push(DetailsPage)
}
jumpDetail(id){
  this.navCtrl.push(DetailsPage,{id:id})
}
}
