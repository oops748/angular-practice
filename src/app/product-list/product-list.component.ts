import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products?: Observable<Product[]>;
  constructor(private cartService: CartService, private router: Router, public loginService: AuthenticationService) { }
  ngOnInit(): void { // 初始化,可以讀取到資料list
    this.reloadData();
  }
  reloadData() {
    this.products = this.cartService.getProducts();
  }

  deleteProduct(id: string) {
    let result = confirm('確定刪除此商品嗎'); // 刪除資料前提示user
    if (result == true) {
      this.cartService.deleteProduct(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData(); // 刪除時能夠重整
          }, error => console.log(error));
    }

  }

  updateProduct(id: String) { // router 傳入字串陣列,改變url 
    this.router.navigate(['products', id]);
  }
}