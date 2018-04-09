import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Contacto } from '../../models/contact.model';
import { ContactService } from '../../service/contacts.services';

@IonicPage()
@Component({
  selector: 'page-modify-contact',
  templateUrl: 'modify-contact.html',
})
export class ModifyContactPage {

  contacto: Contacto;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    private contactService: ContactService
  ) {
    this.contacto = navParams.get('arg_contacto');      // Recibimos por parámetros el objeto contacto a modificar
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifyContactPage');
  }

  onUpdateContact(value: Contacto){   // Click en modificar
    this.contactService.updateContact(value.key, value);
    this.navCtrl.pop();
  }

  cancel(){   // Click en cancelar
    console.log("CLICK CANCELAR");
    this.navCtrl.pop();
  }

}
