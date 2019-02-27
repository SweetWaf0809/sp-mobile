//需求：在当前的文件中 创建一个服务类（Injectable）
//在服务类中 准备封装一个方法：负责网络通信，通信前显示一个loading，通信后loading关闭
import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {LoadingController} from 'ionic-angular'

@Injectable()
export class MyHttpService{

    constructor(
        private myHttp:HttpClient,
        private loadingCtrl:LoadingController
    ){}

    //在服务类中创建一个自定义方法
    /**
     * 
     * @param url ：要请求的地址
     * @param handler ：请求之后，要执行的处理函数,有要求：得有参数处理
     */
    sendGetRequest(url,handler){
        console.log("显示loading")
        var myLoading=this.loadingCtrl.create({
            content:"正在请求数据...",

        });
        myLoading.present();
        console.log("准备发起一次get请求")
        this.myHttp.get(url,{withCredentials:true}).subscribe((result:any)=>{
            console.log(result)
            //请求成功之后，调用通过参数传来的方法，对请求到的数据做处理
            handler(result)
            //关闭loading
            myLoading.dismiss()
        })
        console.log("关闭loading")

    }
}