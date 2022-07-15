import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product = new Product();
  submitted = false;

  @Input() error?: string | null;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  newProduct(): void {
    this.submitted = false;
    this.product = new Product();
  }

  save() {
    this.cartService.createProduct(this.product)
      .subscribe(data => {
        this.submitted = true;
        this.product = new Product();
      }, error => console.log(error));
  }

  onSubmit() {
    if (this.product.id === undefined) {
      this.error = ('請填寫編號')
    } else if (this.product.name === undefined) {
      this.error = ('請填寫名稱')
    } else if (this.product.price === undefined) {
      this.error = ('請填寫金額')
    } else {
      this.save();
    }

  }

}
