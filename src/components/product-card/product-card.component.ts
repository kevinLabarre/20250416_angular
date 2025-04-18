import { Component, Input } from '@angular/core';
import { IProduct } from '../../interfaces/IProduct';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product?: IProduct

  constructor(private route: Router) { }

  handleClick() {
    this.route.navigate(['product', this.product?.id])
  }

}
