import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  id: number = 0

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }

}
