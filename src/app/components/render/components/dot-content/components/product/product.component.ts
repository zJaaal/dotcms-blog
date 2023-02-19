import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
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
