import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  id!: string;
  product: Product = new Product();
  submitted = false;
  constructor(private cartService: CartService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.cartService.getOneProduct(this.id)
      .subscribe(data => {
        this.product = data;
      }, error => console.log(error));
  }

  updateProduct() {
    this.cartService.updateProduct(this.id, this.product)
      .subscribe(data => {
        this.product = new Product();

      }, error => console.log(error));
  }

  onSubmit() {
    this.updateProduct();
    this.submitted = true;
  }

}
