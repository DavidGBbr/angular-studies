import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ng-template [ngIf]="getDados">
      <h1>{{ getDados.nome }}</h1>
      <h2>{{ getDados.idade }}</h2>
    </ng-template>
    <app-output (enviarDados)="setDados($event)"></app-output>
    <app-food-add></app-food-add>
    <app-food-list></app-food-list>
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

  public getDados: { nome: string; idade: number } | undefined;

  public setDados(event: { nome: string; idade: number }) {
    this.getDados = event;
  }
}
