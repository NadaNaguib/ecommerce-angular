import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingModule } from 'primeng/rating';
import { Products } from '../products';
import products from '../../assets/products-list.json';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, NgbRatingModule, FormsModule, CommonModule, RatingModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() productItem!: Products;

  constructor(private router: Router) {}
}
