import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product: any = {};
  specifications: Array<Array<string>> = [];

  ngOnInit() {
    this.specifications = Object.entries(this.product?.specifications1);
  }
}
