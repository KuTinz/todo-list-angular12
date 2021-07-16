import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../models/todo.model";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  // animations: [
  //   trigger('fadeStrikeThrough', [
  //     state('active', style({
  //       fontSize: '18px',
  //       color: 'black'
  //     })),
  //     state('completed', style({
  //       fontSize: '17px',
  //       color: 'lightgrey',
  //       textDirection: 'line-though'
  //     })),
  //     transition('active <=> completed', [animate(250)])
  //   ]),
  // ]
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo!: Todo;
  @Output()
  changeStatus: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output()
  editTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output()
  deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>()

  isHovered = false;
  isEditing = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeTodoStatus() {
    this.changeStatus.emit({...this.todo, isCompleted: !this.todo.isCompleted})
  }

  submitEdit(event: KeyboardEvent) {
    const {keyCode} = event;
    event.preventDefault();
    if (keyCode === 13) {
      this.editTodo.emit(this.todo);
      this.isEditing = false;
    }
  }

  removeTodo() {
    this.deleteTodo.emit(this.todo);
  }
}
