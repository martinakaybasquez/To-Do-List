import { Component, numberAttribute } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDo } from './models/to-do';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularToDo';
  inputTasks: ToDo[] = [];
  quickAddTask: string = "";

  toDoList: ToDo[] = [
    {task: "Fold clothes", completed: false, duration: 2},
    {task: "Meal prep", completed: true, duration: 2},
    {task: "Eat meal prep", completed: false, duration: 2},
    {task: "Bang head on wall", completed: true, duration: 2},
    {task: "Get a job", completed: false, duration: 2},
  ]



  // YOU WERE TRYING TO BE FANCY BUT YOU ARE A FOOL
  // addTask(task: string, completed: boolean, ):void{
  //   // this.allCities.push(this.city);
  //   this.inputTasks.push(this.quickAddTask);
  // }


}
