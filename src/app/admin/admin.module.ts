import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from '../shared/admin-layout/admin-layout.component';
import { AddPageComponent } from './shared/add-page/add-page.component';
import { LoginPageComponent } from './shared/login-page/login-page.component';
import { EditPageComponent } from './shared/edit-page/edit-page.component';
import { OrdersPageComponent } from './shared/orders-page/orders-page.component';
import { DashboardPageComponent } from './shared/dashboard-page/dashboard-page.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    EditPageComponent,
    OrdersPageComponent,
    AddPageComponent,
    DashboardPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          { path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          { path: 'login', component: LoginPageComponent },
          { path: 'add', component: AddPageComponent },
          { path: 'product/:id/edit', component: EditPageComponent },
          { path: 'orders', component: OrdersPageComponent },
          { path: 'dashboard', component: DashboardPageComponent }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AdminModule { }
