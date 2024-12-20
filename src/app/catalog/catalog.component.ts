import { Component, inject } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products: any;
  filter: string = '';
  private carSvc: CartService = inject(CartService);

  constructor(private productSvc: ProductService){
  }

  ngOnInit(){
    this.productSvc.getProducts().subscribe(e => {
      this.products = e;
    })
  }

  getFilteredProducts(){
    return this.filter === '' ? this.products : this.products.filter((product:any)=> product.category === this.filter);
  }

  addToCart(product: IProduct){
    this.carSvc.add(product);
  }

}
