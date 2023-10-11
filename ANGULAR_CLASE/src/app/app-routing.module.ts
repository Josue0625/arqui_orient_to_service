import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', loadChildren : ()=> {return import("./home/home.module").then(res=>res.HomeModule)}},
  {path: 'producto', loadChildren : ()=> {return import("./producto/producto.module").then(res=>res.ProductoModule)}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
