import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ConsultarProductoComponent } from './components/consultar-producto/consultar-producto.component';
import { ActualizarProductoComponent } from './components/actualizar-producto/actualizar-producto.component';
import { EliminarProductoComponent } from './components/eliminar-producto/eliminar-producto.component';


@NgModule({
  declarations: [
    ProductoComponent,
    CrearProductoComponent,
    ConsultarProductoComponent,
    ActualizarProductoComponent,
    EliminarProductoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    NgOptimizedImage
  ]
})
export class ProductoModule { }
