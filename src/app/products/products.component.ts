import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Products } from '../products';
import products from '../../assets/products-list/products-list.json';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent, HeroComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productsArr: Array<Products> = products;
}
