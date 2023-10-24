import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  constructor(private fb: FormBuilder, private ser : AuthService){

  }

  form = this.fb.group({
    email: [""],
    password: [""]
  })

  obtener(){
    this.ser.getUsuario().subscribe(res=>{
      console.log("Ta bien");
      console.log(res);
    },
    (err)=>{
      console.log("error");
      console.log(err);
    })
  }

  submit(){
    this.ser.getToken(this.form.value).subscribe(
      (res:any)=>{
      localStorage.setItem('access_token', res.access_token);
    }, 
    err => {
      console.log(err)
    }
    )
  }
}
