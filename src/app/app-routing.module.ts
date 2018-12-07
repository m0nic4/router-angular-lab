import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListSidebarComponent } from './product-list-sidebar/product-list-sidebar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'product/:id', component: ProductDetailComponent},
  {path: ' ', component: SidebarComponent, outlet: 'sidebar'},
  {path: 'products', component: SidebarComponent, outlet: 'sidebar'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
