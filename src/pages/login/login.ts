import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { User } from "../../models/user.model";
import { AngularFireAuth } from 'angularfire2/auth';
import { AboutPage } from '../about/about';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(
      private afAuth: AngularFireAuth,
      public navCtrl: NavController,
      public navParams: NavParams,
      public menu: MenuController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user: User) {   // Boton login en Firebase
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.navCtrl.setRoot(AboutPage);
      }
    }
    catch (e) {
      alert("Debes utilizar una cuenta válida: usuario@usuario.com, usuario");
      console.error(e);
    }
  }
 
  async register(user: User) {  // Boton registrar en Firebase
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
      if (result) {
        this.navCtrl.setRoot(AboutPage);
      }
    } catch (e) {
      alert("El usuario debe ser un correo electrónico.");
      console.error(e);
    }
  }

  // Para limitar el uso del menú haciendo gesto hacia la izquierda.
  /*
  ionViewDidEnter() {
    this.menu.enable(false);
  }
  ionViewWillLeave() {
    this.menu.enable(true);
  } */

}
