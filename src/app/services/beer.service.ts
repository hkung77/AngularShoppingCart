import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from './beer.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BeerService {
  private _page = 1;
  private _per_page = 50;

  constructor (
    private http: HttpClient,
  ) {}

  setPage(page: number) : void {
    this._page = page;
  }

  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(`https://api.punkapi.com/v2/beers?page=${this._page}&per_page=${this._per_page}`);
  }

}