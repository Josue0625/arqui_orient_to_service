import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'/home'},
  {path: 'home', loadChildren : ()=> {return import("./home/home.module").then(res=>res.HomeModule)}},
  {path: 'producto', canActivate:[authGuard], loadChildren : ()=> {return import("./producto/producto.module").then(res=>res.ProductoModule)}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
