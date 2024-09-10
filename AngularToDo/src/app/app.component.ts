import { Component, numberAttribute } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDo } from './models/to-do';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularToDo';
  formTask: ToDo = {} as ToDo;
  allToDo: ToDo[] = [];
  // inputTasks: ToDo[] = [];
  // quickAddTask: string = "";

  toDoList: ToDo[] = [
    {task: "Fold clothes", completed: false, duration: 2},
    {task: "Meal prep", completed: true, duration: 2},
    {task: "Eat meal prep", completed: false, duration: 2},
    {task: "Bang head on wall", completed: true, duration: 2},
    {task: "Get a job", completed: false, duration: -0},
    {task: "Learn how to program", completed: false, duration: 1000000},
    {task: "Learn how to be a human againp", completed: false, duration: 1000000},
    {task: "Stop subscribing to robot propaganda AKA ROBOGANDA??????", completed: false, duration: 2},
    {task: "Stop being a clown", completed: false, duration: 1000000},
    {task: "Learn how to read in English", completed: false, duration: 1000000},
    {task: "Follow instructions", completed: false, duration: 0}
  ]
  addTask():void{
    this.formTask.completed = false;
    let result: ToDo = {...this.formTask};
    this.allToDo.push(result);
    this.formTask = {} as ToDo;
  }

  updateCompletion(task:ToDo):void{
    task.completed = true;
  }


  // YOU WERE TRYING TO BE FANCY BUT YOU ARE A FOOL
  // addTask(task: string, completed: boolean, ):void{
  //   // this.allCities.push(this.city);
  //   this.inputTasks.push(this.quickAddTask);
  // }


}





