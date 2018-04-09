import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { NewContactPage } from '../new-contact/new-contact';
import { Contacto } from '../../models/contact.model';
import { ContactService } from '../../service/contacts.services';
import { ModifyContactPage } from '../modify-contact/modify-contact';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  contactList: Contacto[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private contactService: ContactService,
    private alertCtrl: AlertController
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  changePage() {
    this.navCtrl.push(NewContactPage);
  }

  // Consigue que los contactos tengan la key de Firebase!!!!!!
  public ionViewWillEnter() {   // En vez de ngInit porque esto es cada vez que se pone visible!!
    console.log("ionViewWillEnter contacts.ts");
    return this.contactService.getContacts()
      .snapshotChanges().subscribe(item => {
        this.contactList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["key"] = element.key;
          this.contactList.push(x as Contacto);
        });
      });
  }

  mostrarAlert(contacto : Contacto) {           // Alert para seleccionar modificar y eliminar un contacto
    let alert = this.alertCtrl.create({
      title: 'Acciones',
      buttons: [
        {
          text: 'Modificar',
          handler: () => {
            this.navCtrl.push(ModifyContactPage,{arg_contacto:contacto});
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.contactService.removeContact(contacto.key);
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            
          }
        }
      ]
    });
    alert.present();
  }

}
