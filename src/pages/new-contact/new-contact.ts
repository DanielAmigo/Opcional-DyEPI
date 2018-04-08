import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ContactService } from '../../service/contacts.services';
import { Contacto } from '../../models/contact';

/**
 * Generated class for the NewContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-contact',
  templateUrl: 'new-contact.html',
})
export class NewContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private contactService: ContactService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewContactPage');
  }

  onAddContact(value: Contacto){
    this.contactService.addContact(value).then(ref => {
      console.log(ref.key);
    });
    this.navCtrl.pop();
  }

}
