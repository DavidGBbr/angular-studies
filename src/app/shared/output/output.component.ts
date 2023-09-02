import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
  public list: Array<{ nome: string; idade: number }> = [
    { nome: 'David', idade: 19 },
    { nome: 'Janaina', idade: 32 },
    { nome: 'Rose', idade: 37 },
  ];

  @Output() public enviarDados = new EventEmitter();

  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
  }

  constructor() {}
  ngOnInit(): void {}
}
