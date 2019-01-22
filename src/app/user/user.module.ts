import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
const routes: Routes = [
  {path: 'app/users', component: UsersListComponent},
  ];
@NgModule({
  declarations: [UsersListComponent, FooterComponent, HeaderComponent],
  imports: [RouterModule.forChild(routes),BrowserModule],
exports: [RouterModule,UsersListComponent]
})
export class UserModule { }
