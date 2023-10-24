import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsgServiceService {

  constructor() { }

  mensajesCrear: string[] = [];
  mensajesConsultar: string[] = [];

  set(mensaje: string, componente: string) {
    if (componente === 'crear') {
      this.mensajesCrear.push(mensaje);
    } else if (componente === 'consultar') {
      this.mensajesConsultar.push(mensaje);
    }
  }

  getMensajes(componente: string): string[] {
    if (componente === 'crear') {
      return this.mensajesCrear;
    } else if (componente === 'consultar') {
      return this.mensajesConsultar;
    }
    return [];
  }
}
