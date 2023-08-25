import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-diretivas-atributos>
      <h1>Aulas de Diretivas Atributo</h1>
      <h3>Final do Bloco</h3>
      <hr />
    </app-diretivas-atributos>

    <app-diretivas-atributos>
      <h1>Segundo bloack</h1>
      <h3>Final do segundo Bloco</h3>
      <hr />
    </app-diretivas-atributos>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
