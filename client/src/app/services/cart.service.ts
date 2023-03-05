import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../classes/cart';
import { Formation } from '../classes/formation';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemList:any=[];
  formationList = new BehaviorSubject<any>([]);
  constructor() { }
  getProducts()
  {
    return this.formationList.asObservable();
  }
  addtoCart(formation:Cart)
  {
    this.cartItemList.push(formation);
    this.formationList.next(this.cartItemList);
  }
  getTotalPrice():number
  {
    let grandTotal:number = 0 ;
    for(let i=0;i<this.cartItemList.length;i++)
    {
      grandTotal=grandTotal+Number(this.cartItemList[i].duration*50);
    }
    return grandTotal;
  }
  removeCartItem(formation:Cart)
  {
    this.cartItemList.map((a:any,index:any)=>{
      if(formation.id === a.id)
      {
        this.cartItemList.splice(index,1);
      }
    })
  }
  removeAll()
  {
    this.cartItemList = [];
    this.formationList.next(this.cartItemList);
  }
}
