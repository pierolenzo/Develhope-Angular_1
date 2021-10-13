import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: 'users',
    loadChildren: () => import('./modules/user.module').then(m => m.UserModule) },
  { path: 'order',
    loadChildren: () => import('./modules/order.module').then(m => m.OrderModule) },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
