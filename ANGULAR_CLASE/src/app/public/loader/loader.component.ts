import { Component } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  constructor(private active: LoaderService) { }

  la$ = this.active.active$;

  activar(){
    this.active.setActive();
  }

  inactivar(){
    this.active.setInactive();
  }
}
