import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ContactService } from '../../service/contacts.services';
import { Contacto } from '../../models/contact.model';
import { ContactPage } from '../contact/contact';

@IonicPage()
@Component({
  selector: 'page-new-contact',
  templateUrl: 'new-contact.html',
})
export class NewContactPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private contactService: ContactService
  ) {   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewContactPage');
  }

  onAddContact(value: Contacto){    // Click en añadir
    this.contactService.addContact(value);
    this.navCtrl.pop();
  }

  cancel(){   // Click en cancelar
    console.log("CLICK CANCELAR");
    this.navCtrl.pop();
  }

}
