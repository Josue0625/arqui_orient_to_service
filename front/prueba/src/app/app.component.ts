import { Component } from '@angular/core';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba';
  ban: boolean = false;
  nombre ?: string ; //Està declarado pero no inicializado
  numero=1;
  color : string = 'rojo';
  bgColor: String = 'bgRojo'
  persona = [
    {nombre: 'Cristian', edad:10},
    {nombre: 'Juan', edad:23},
    {nombre: 'Felipe', edad:40}
  ]

  cambiarTitle(){
    
    if(this.title == "prueba"){
      this.title = 'Changed';
    }else{
      this.title = 'prueba';
    }
  }
  cambiarState(){
    if(this.ban == true){
        this.ban=false
    }else{
      this.ban=true
    }
    
  }

  ngOnInit(){
    console.log("Josue") 
  }
  ngOnChanges(){
    console.log('changed');
  }

}
