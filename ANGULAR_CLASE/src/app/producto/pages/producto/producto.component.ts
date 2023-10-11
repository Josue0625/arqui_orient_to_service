import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../product-service.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit{

  constructor(private productService : ProductServiceService){}

  ngOnInit(){
    this.productService.getAll().subscribe((res : any)=>{
      console.log(res)
    })
  }

}
