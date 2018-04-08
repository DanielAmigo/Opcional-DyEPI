import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Contacto } from '../../models/contact';
import { ContactService } from '../../service/contacts.services';

/**
 * Generated class for the ModifyContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modify-contact',
  templateUrl: 'modify-contact.html',
})
export class ModifyContactPage {

  contacto: Contacto;

  constructor(public navCtrl: NavController, public navParams: NavParams, private contactService: ContactService) {
    this.contacto = navParams.get('arg_contacto');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifyContactPage');
  }

  onUpdateContact(value: Contacto){
    this.contactService.updateContact(value);
    this.navCtrl.pop();
  }

}
