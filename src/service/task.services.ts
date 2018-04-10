import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Task } from "../models/task.model";

@Injectable()
export class TaskService{

    private dbPath = '/Opcional-DyEPI/tasks/';
 
    taskRef: AngularFireList<Task> = null;

    constructor(private db:AngularFireDatabase){
        this.taskRef = db.list(this.dbPath);
    }

    getTasks(){
        return this.taskRef = this.db.list(this.dbPath);
    }

    addTask(value: Task): void{
        this.taskRef.push(value);
    }
 
    updateTask(key: string, value: any){
        return this.taskRef.update(key, value);
    }
 
    removeTask(key: string): void {
        this.taskRef.remove(key);
    }
 
}