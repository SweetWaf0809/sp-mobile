import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {IndexPage} from '../pages/index/index'
import {CartPage} from '../pages/cart/cart'
import {DetailsPage} from '../pages/details/details'
import {LoginPage} from '../pages/login/login'
import {NotFoundPage} from '../pages/not-found/not-found'
import {OrderConfirmPage} from '../pages/order-confirm/order-confirm'
import {PayPage} from '../pages/pay/pay'
import {UserCenterPage} from '../pages/user-center/user-center'
import {MenuPage} from '../pages/menu/menu'
import {FoundPage} from '../pages/found/found'
import {AddCartPage} from '../pages/add-cart/add-cart'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MyHttpService} from './utility/service/myhttp.service'

@NgModule({
  declarations: [
    AddCartPage,
    FoundPage,
    MenuPage,
    UserCenterPage,
    PayPage,
    OrderConfirmPage,
    NotFoundPage,
    LoginPage,
    DetailsPage,
    CartPage,
    IndexPage,
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AddCartPage,
    FoundPage,
    MenuPage,
    UserCenterPage,
    PayPage,
    OrderConfirmPage,
    NotFoundPage,
    LoginPage,
    DetailsPage,
    CartPage,
    IndexPage,
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    MyHttpService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
