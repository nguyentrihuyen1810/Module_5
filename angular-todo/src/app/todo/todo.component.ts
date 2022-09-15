import { Component, OnInit } from '@angular/core';
import {Todo} from "../data/Todo";
import { TodoService } from '../service/todo.service';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.getAllTodo();
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }


  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        content: value,
        complete: false
      };
      this.todoService.save(todo).subscribe(
        () => {
        },
        () => {
        },
        () => {
          this.ngOnInit();
        }
      );
      this.content.reset();
    }
  }

  getAllTodo() {
    this.todoService.getAll().subscribe(
      (data) => this.todos = data);
  }

  delete(todo: Todo) {
    this.todoService.delete(todo.id).subscribe(
      () => {
      },
      () => {
      },
      () => {
        this.ngOnInit();
      }
    );
  }

}
