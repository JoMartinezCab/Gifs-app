import { GifsService } from 'src/app/gifs/services/gifs.service';
import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsService:GifsService){}

  get tags():string[]{
    return this.gifsService.tagsHistory;
  }

  searchByTag(tag: string){
    this.gifsService.searchTag(tag);
  }

  removeTag(tag: string){
    this.gifsService.removeTag(tag);
  }
}
