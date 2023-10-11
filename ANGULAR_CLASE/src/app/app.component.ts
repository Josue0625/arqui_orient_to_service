import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ANGULAR_CLASE';

  constructor(private http : HttpClient){}
  
  ngOnInit(){
    this.http.get(`https://api.escuelajs.co/api/v1/products`)
    .subscribe( (res :any)=>{
      console.log(res)
    })
  }

}
