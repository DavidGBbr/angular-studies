import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foodlist } from '../module/foodlist';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  private list: Array<string> = ['Banana', 'Arroz', 'Ovo', 'Pizza'];

  // public foodList() {
  //   return this.list;
  // }

  constructor(private http: HttpClient) {}

  private url: string = 'http://localhost:3000/';

  public foodList(): Observable<Foodlist> {
    return this.http.get<Foodlist>(`${this.url}list-food`).pipe(
      (res) => res,
      (error) => error
    );
  }

  public foodListAdd(value: string) {
    this.foodListAlert(value);
    return this.list.push(value);
  }

  public emitEvent = new EventEmitter();

  public foodListAlert(value: string) {
    return this.emitEvent.emit(value);
  }
}
