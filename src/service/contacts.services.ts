import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Contacto } from "../models/contact.model";

@Injectable()
export class ContactService{

    private dbPath = '/Opcional-DyEPI';
 
    contactsRef: AngularFireList<Contacto> = null;

    constructor(private db:AngularFireDatabase){
        this.contactsRef = db.list(this.dbPath);
    }

    getContacts(){
        return this.contactsRef = this.db.list(this.dbPath);
    }

    addContact(value: Contacto): void{
        this.contactsRef.push(value);
    }
 
    updateContact(key: string, value: any){
        return this.contactsRef.update(key, value);
    }
 
    removeContact(key: string): void {
        this.contactsRef.remove(key);
    }
 
}