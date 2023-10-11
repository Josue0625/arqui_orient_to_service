import { Component } from '@angular/core';
import { MsgServiceService } from '../../msg-service.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent {
  constructor(public msgService : MsgServiceService){}

  enviar(){
    this.msgService.set("Hola")
  }
}
