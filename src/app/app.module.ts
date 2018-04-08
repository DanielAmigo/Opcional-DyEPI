import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { NewContactPage } from '../pages/new-contact/new-contact';
import { ContactService } from '../service/contacts.services';
import { ModifyContactPage } from '../pages/modify-contact/modify-contact';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    AboutPage,
    ContactPage,
    NewContactPage,
    ModifyContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    AboutPage,
    ContactPage,
    NewContactPage,
    ModifyContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactService
  ]
})
export class AppModule {}
