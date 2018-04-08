import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifyContactPage } from './modify-contact';

@NgModule({
  declarations: [
    ModifyContactPage,
  ],
  imports: [
    IonicPageModule.forChild(ModifyContactPage),
  ],
})
export class ModifyContactPageModule {}
