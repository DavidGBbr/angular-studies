import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent {
  public nome: string = 'David';
  public idade: number = 19;
  public maisUm: number = 1;

  public checkedDisabled: boolean = true;
  public imgSrc: string =
    'https://veja.abril.com.br/wp-content/uploads/2017/01/cao-labrador-3-copy.jpg?quality=90&strip=info&w=1280&h=720&crop=1';
  public imgTitle: string = 'Property Binding';

  public position: { x: number; y: number } = { x: 0, y: 0 };

  public alertaInfo(valor: MouseEvent) {
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
