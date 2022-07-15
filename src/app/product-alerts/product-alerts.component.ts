// import { Component, OnInit, Input } from '@angular/core';
import { Component, Output, Input, EventEmitter } from '@angular/core';

import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
// export class ProductAlertsComponent implements OnInit {
//   @Input() product!: Product;
//   constructor() {}

//   ngOnInit(): void {}
// }
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}
