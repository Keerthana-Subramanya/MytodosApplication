import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../Service/data/todo-data.service';
export class Todo
{
 constructor(
   public id:number,
   public description:string,
   public IsCompleted:boolean,
   public targetDate:Date
 )
 {

 }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos:Todo[];
  constructor(private todoservice:TodoDataService) { }
 
  ngOnInit() {
    this.todoservice.retrieveAllTodos('keerthana').subscribe(
      response =>{
        this.todos=response;
      }
    )
  }

}
