import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {IndexPage} from '../index/index'
import {CartPage} from '../cart/cart'
import {UserCenterPage} from '../user-center/user-center'
import {NotFoundPage} from '../not-found/not-found'
import {FoundPage} from '../found/found'
import {MenuPage} from '../menu/menu'

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
tabIndex=IndexPage;
tabCart=CartPage;
tabUC=UserCenterPage;
tabNF=NotFoundPage;
tabMenu=MenuPage;
tabFound=FoundPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
