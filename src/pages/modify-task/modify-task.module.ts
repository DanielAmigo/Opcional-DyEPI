import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifyTaskPage } from './modify-task';

@NgModule({
  declarations: [
    ModifyTaskPage,
  ],
  imports: [
    IonicPageModule.forChild(ModifyTaskPage),
  ],
})
export class ModifyTaskPageModule {}
