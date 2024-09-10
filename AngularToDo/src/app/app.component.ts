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
  inputTasks: ToDo[] = [];
  quickAddTask: string = "";

  toDoList: ToDo[] = [
    {task: "Fold clothes FALSE", completed: false, duration: 2},
    {task: "Meal prep TRUE", completed: true, duration: 2},
    {task: "Eat meal prep FALSE", completed: false, duration: 2},
    {task: "Bang head on wall TRUE", completed: true, duration: 2},
    {task: "Get a job FALSE", completed: false, duration: 2},
  ]
  // addTask ():void{
  //   this.formToDo.
  // }


  // YOU WERE TRYING TO BE FANCY BUT YOU ARE A FOOL
  // addTask(task: string, completed: boolean, ):void{
  //   // this.allCities.push(this.city);
  //   this.inputTasks.push(this.quickAddTask);
  // }


}
