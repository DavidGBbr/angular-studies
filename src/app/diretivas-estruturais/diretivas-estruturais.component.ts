import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss'],
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000);
  }

  public onClick() {
    if (this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  public list: Array<{ nome: string; idade: number }> = [
    { nome: 'David', idade: 19 },
    { nome: 'Maria', idade: 18 },
    { nome: 'Carlos', idade: 39 },
  ];

  public onClickAddList = () => {
    this.list.push({ nome: 'Nayara', idade: 31 });
  };

  public onClickEventList = (event: number) => {
    this.list.splice(event, 1);
  };

  public nome: string = 'David';
}
