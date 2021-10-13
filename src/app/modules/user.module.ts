import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UserRoutingModule } from "./user-routing.module";
import { UserContainerComponent } from "./user/user-container/user-container.component";
import { UserDetailComponent } from "./user/user-detail/user-detail.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { UserSingleComponent } from "./user/user-single/user-single.component";


@NgModule({
  declarations: [
    UserContainerComponent,
    UserListComponent,
    UserDetailComponent,
    UserSingleComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [UserSingleComponent]
})

export class UserModule {}