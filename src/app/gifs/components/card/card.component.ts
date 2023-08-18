import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gif-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit{

  @Input()
  public gif!: Gif;

  /**
   * OnInit es un metodo esecial del ciclo de vida de angular que se ejecuta cuando el comonente se inicializa
   */
  ngOnInit(): void {
    if( !this.gif ) throw new Error('Gif property is required')
  }
}
