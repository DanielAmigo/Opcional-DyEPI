import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Task } from '../../models/task.model';
import { TaskService } from '../../service/task.services';

@IonicPage()
@Component({
  selector: 'page-modify-task',
  templateUrl: 'modify-task.html',
})
export class ModifyTaskPage {

  task: Task;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    private taskService: TaskService
  ) {
    this.task = navParams.get('arg_task');      // Recibimos por parámetros el objeto task a modificar
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifyTaskPage');
  }

  onUpdateTask(value: Task){   // Click en modificar
    this.taskService.updateTask(value.key, value);
    this.navCtrl.pop();
  }

  cancel(){   // Click en cancelar
    console.log("CLICK CANCELAR");
    this.navCtrl.pop();
  }

}
