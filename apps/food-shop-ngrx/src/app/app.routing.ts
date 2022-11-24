import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { YourOrderDetailsComponent } from './components/your-order-details/your-order-details.component';
import { ShopComponent } from './modules/shop/components/shop/shop.component';
import { YourOrdersComponent } from './components/your-orders/your-orders.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'orders',
    component: YourOrdersComponent
  },
  {
    path: 'orders/:id',
    component: YourOrderDetailsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRouting {
}
