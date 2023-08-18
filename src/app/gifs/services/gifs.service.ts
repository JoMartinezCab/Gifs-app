import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

//Interfaces
import { Gif, SearchResponse } from './../interfaces/gifs.interfaces';

const GIPHY_API_KEY = 'hNoMokDnsFLKZIqmC75AUW2JI1RaY6z6';
const GIPHY_API_URL = 'https://api.giphy.com/v1/gifs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public limitGifs = 9;
  public gifsList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey: string = GIPHY_API_KEY;
  private serviceUrl: string = GIPHY_API_URL;

  constructor( private http: HttpClient ){ }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  private organizeHistory(tag:string){
    tag = tag.toLowerCase();

    if(this._tagsHistory.includes(tag)) this.removeTag(tag);


    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10 );
  }

  public removeTag( tag:string ):void{
    this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag != tag );
  }

  public searchTag( tag:string ):void {
    if(tag.length === 0) return;

    this.organizeHistory(tag);

    const searchUrl = `${this.serviceUrl}/search`;
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', this.limitGifs)
      .set('q', tag);

    this.http.get<SearchResponse>(searchUrl, { params })
      .subscribe(res => {
        this.gifsList = res.data;
      });
  }
}
