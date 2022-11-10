import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  toggleAddToTask = () => {
    console.log('Add to task clicked');
  };
  constructor() {}

  ngOnInit(): void {}
}
