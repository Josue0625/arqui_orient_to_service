import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AuthComponent } from './pages/auth/auth.component';
import { FormularioComponent } from './components/formulario/formulario.component';


@NgModule({
  declarations: [
    AuthComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
