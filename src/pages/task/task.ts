import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { NewTaskPage } from '../new-task/new-task';
import { Task } from '../../models/task.model';
import { TaskService } from '../../service/task.services';
import { ModifyTaskPage } from '../modify-task/modify-task';

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {

  taskList: Task[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private taskService: TaskService,
    private alertCtrl: AlertController
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPage');
  }

  changePage() {
    this.navCtrl.push(NewTaskPage);
  }

  // Consigue que los tasks tengan la key de Firebase!!!!!!
  public ionViewWillEnter() {   // En vez de ngInit porque esto es cada vez que se pone visible!!
    console.log("ionViewWillEnter task.ts");
    return this.taskService.getTasks()
      .snapshotChanges().subscribe(item => {
        this.taskList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["key"] = element.key;
          this.taskList.push(x as Task);
        });
      });
  }

  mostrarAlert(task : Task) {           // Alert para seleccionar modificar y eliminar un task
    let alert = this.alertCtrl.create({
      title: 'Acciones',
      buttons: [
        {
          text: 'Modificar',
          handler: () => {
            this.navCtrl.push(ModifyTaskPage,{arg_task:task});
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.taskService.removeTask(task.key);
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
