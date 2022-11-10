import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task | undefined;
  @Output() btnDelete = new EventEmitter();
  @Output() btnToggleReminder = new EventEmitter();

  onToggle = (task: Task) => {
    this.btnToggleReminder.emit(task);
  };
  onDelete = (task: Task) => {
    this.btnDelete.emit(task);
  };

  constructor() {}

  ngOnInit(): void {}

  faTimes = faTimes;
}
