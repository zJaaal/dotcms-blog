import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product!: Product;
  specifications: Array<Array<string>> = [];

  ngOnInit() {
    this.specifications = this.product.specifications1
      ? Object.entries(this.product.specifications1)
      : [];
  }
}
