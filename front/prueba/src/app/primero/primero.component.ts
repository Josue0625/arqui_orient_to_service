import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.scss']
})
export class PrimeroComponent implements OnInit, OnChanges, OnDestroy{
   title = 'FIRST'; 
  @Input() nombre : string = '';

  ngOnDestroy(): void{
    console.log("No toy")
  }

  ngOnInit(){
   /*  console.log(this.nombre) */
  }

  ngOnChanges(){
    console.log('init');
  }
}
