import { Component, ViewChild, ElementRef } from '@angular/core';
import { MsgServiceService } from '../../msg-service.service';

@Component({
  selector: 'app-consultar-producto',
  templateUrl: './consultar-producto.component.html',
  styleUrls: ['./consultar-producto.component.scss']
})
export class ConsultarProductoComponent {
  @ViewChild('miInput') input: ElementRef;

  constructor(public msgService : MsgServiceService){
    this.input = new ElementRef(null);
  }
  

  enviar(valorInput: string){
    
    this.msgService.set(valorInput, 'crear');
  }
  
}
