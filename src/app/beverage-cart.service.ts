import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Beverage } from './beverages-list/beverage';

@Injectable({
  providedIn: 'root'
})
export class BeverageCartService {
private _cartList: Beverage[] = [];
cartList: BehaviorSubject<Beverage[]> = new BehaviorSubject(this._cartList);

constructor() { }

  addToCart(beverage: Beverage) {
    let item: Beverage = this._cartList.find((v1) => v1.name == beverage.name)!;
    if(!item){
    this._cartList.push({...beverage});
    } else {
      item.quantity += beverage.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
    
  }

 
  
}
