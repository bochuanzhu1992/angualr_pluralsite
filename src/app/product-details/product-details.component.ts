import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() productDetail!:IProduct;
  @Output() buy = new EventEmitter();
  
  getImageUrl(product:IProduct){
    if(!product) return '';
    return '/assets/images/robot-parts/'+ product.imageName;
  }

  getDiscountedClasses(product: IProduct){
    if(product.discount >0) return ['strickethrough'];
   else return [];
  }

  buyButtonClicked(product: IProduct){
    this.buy.emit();
  }

}
