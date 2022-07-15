import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { AppComponent } from './app.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { LoginComponent } from './login/login.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: "test123", component: TestComponent, canActivate: [AuthGaurdService] },
  { path: 'productList', component: ProductListComponent, canActivate: [AuthGaurdService] },
  // { path: 'products/:productId', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'productsAdd', component: ProductCreateComponent, canActivate: [AuthGaurdService] },
  { path: 'products/:id', component: ProductUpdateComponent, canActivate: [AuthGaurdService] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService] },
]; // 主要寫其他路由的地方

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
