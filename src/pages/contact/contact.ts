import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


import { NewContactPage } from '../new-contact/new-contact';
import { Contacto } from '../../models/contact';
import { Observable } from '@firebase/util';
import { ContactService } from '../../service/contacts.services';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  contacts: Observable<Contacto[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private ContactService: ContactService, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  changePage() {
    this.navCtrl.push(NewContactPage);
  }

  ionViewWillEnter(){

    this.contacts=this.ContactService.getContacts();
     
   }

}
