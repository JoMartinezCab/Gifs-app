import { Component } from '@angular/core';

//Service
import { GifsService } from '../../services/gifs.service';

//Interface
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html'
})

export class HomePageComponent {

  constructor( private gifService:GifsService){}

  get gifs(): Gif[] {
    return this.gifService.gifsList;
  }

}
