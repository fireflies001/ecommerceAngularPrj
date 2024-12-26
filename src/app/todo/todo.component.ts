import { Component } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { ListComponent } from "../list/list.component";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule, ListComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todoItems?: string;
  todoForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  get gettodoItems() {
    return this.todoItems;
  }
  onSubmit() {
    this.todoItems = this.todoForm.value.firstName!
  }
}
