import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../products';
import { CartService } from '../cart.service';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  // product: Products | undefined;
  @Input() product?: Product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productList: ProductListComponent
  ) { }



  ngOnInit() {
    // // First get the product id from the current route.
    // const routeParams = this.route.snapshot.paramMap;
    // const productIdFromRoute = Number(routeParams.get('productId'));

    // // Find the product that correspond with the id provided in route.
    // this.product = products.find(
    //   (product) => product.id === productIdFromRoute
    // );

  }

  // addToCart(product: Product) {
  //   this.cartService.addToCart(product);
  //   window.alert('您已將產品加入購物車!');
  // }


}
