import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-input [contador]="addValue"></app-input>
    <button (click)="add()">Add</button>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  public addValue: number = 0;
  public add = () => {
    this.addValue += 1;
  };
  constructor() {}
  ngOnInit(): void {}
}
