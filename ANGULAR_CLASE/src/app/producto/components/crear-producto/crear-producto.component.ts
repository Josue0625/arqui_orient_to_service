import { Component, ViewChild, ElementRef } from '@angular/core';
import { MsgServiceService } from '../../msg-service.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent {
  @ViewChild('miInput') input: ElementRef;

  constructor(public msgService : MsgServiceService){
    this.input = new ElementRef(null);
  }
  

  enviar(valorInput: string){
    this.msgService.set(valorInput, 'consultar');
  }
}
