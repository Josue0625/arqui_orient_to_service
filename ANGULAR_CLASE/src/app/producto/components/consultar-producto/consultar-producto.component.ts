import { Component } from '@angular/core';
import { MsgServiceService } from '../../msg-service.service';

@Component({
  selector: 'app-consultar-producto',
  templateUrl: './consultar-producto.component.html',
  styleUrls: ['./consultar-producto.component.scss']
})
export class ConsultarProductoComponent {
  constructor(public msgService : MsgServiceService){}
}
