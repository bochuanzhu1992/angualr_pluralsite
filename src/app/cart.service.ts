import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';
import { ILineItem} from './catalog/line-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: ILineItem[]= [];
  constructor() { }

  add(product: IProduct){
    let lineItem = this.findLineItem(product);
    if (lineItem !== undefined){
      lineItem.qty++;
    }else{
      lineItem = {product: product, qty:1};
      this.cart.push(lineItem);
    }
  }

  findLineItem(product:IProduct){
    return this.cart.find((li)=> li.product.id === product.id)
  }
}
