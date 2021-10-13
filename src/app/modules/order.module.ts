import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { OrderContainerComponent } from "./order/order-container/order-container.component";
import { OrderDetailComponent } from "./order/order-detail/order-detail.component";
import { OrderListComponent } from "./order/order-list/order-list.component";
import { OrderSingleComponent } from "./order/order-single/order-single.component";
import { UserModule } from "./user.module";
import { OrderRoutingModule } from "./order-routing.module"

@NgModule({
  declarations: [
    OrderContainerComponent,
    OrderListComponent,
    OrderSingleComponent,
    OrderDetailComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    UserModule
  ],
  exports: []
})

export class OrderModule {}