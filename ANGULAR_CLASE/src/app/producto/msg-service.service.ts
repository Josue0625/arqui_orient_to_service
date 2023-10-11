import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsgServiceService {

  constructor() { }

  mensaje : string[] = [];
  set(msg:string){
    this.mensaje.push(msg)
  }
}
