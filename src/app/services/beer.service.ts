import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from './beer.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BeerService {
  private _page = 1;
  private _per_page = 50;
  private _beer_search = "";

  constructor(
    private http: HttpClient,
  ) { }

  getPage(): number {
    return this._page;
  }

  setFilter(filter: string): void {
    this._beer_search = filter;
    this._page = 1;
  }

  nextPage(): void {
    this._page += 1;
  }

  prevPage(): void {
    if (this._page > 1) {
      this._page -= 1;
    }
  }

  getSearchedBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(`https://api.punkapi.com/v2/beers?page=${this._page}&per_page=${this._per_page}&beer_name=${this._beer_search}`);
  }

  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(`https://api.punkapi.com/v2/beers?page=${this._page}&per_page=${this._per_page}`);
  }

}