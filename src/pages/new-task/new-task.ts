import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TaskService } from '../../service/task.services';
import { Task } from '../../models/task.model';
import { TaskPage } from '../task/task';

@IonicPage()
@Component({
  selector: 'page-new-task',
  templateUrl: 'new-task.html',
})
export class NewTaskPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private taskService: TaskService
  ) {   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewTaskPage');
  }

  onAddTask(value: Task){    // Click en añadir
    this.taskService.addTask(value);
    this.navCtrl.pop();
  }

  cancel(){   // Click en cancelar
    console.log("CLICK CANCELAR");
    this.navCtrl.pop();
  }

}
