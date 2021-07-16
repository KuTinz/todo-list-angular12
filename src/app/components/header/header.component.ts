import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private todoSerVice: TodoService) { }

  ngOnInit(): void {
  }

  toggleAll() {
    this.todoSerVice.toggleAll();
  }
}
