import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from './beer.interface';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class BeerService {
  private _page = 1;
  private _per_page = 50;
  public _beer_search = "";
  public beers: Beer[] = [];
  public _setBeers: Subject<Beer[]> = new Subject<Beer[]>();

  constructor(
    private http: HttpClient,
  ) {
    this._setBeers.subscribe((value) =>
      this.beers = value)
  }

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

  setBeers(beers: Beer[]): void {
    this._setBeers.next(beers);
  }

  getSearchedBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(`https://api.punkapi.com/v2/beers?page=${this._page}&per_page=${this._per_page}&beer_name=${this._beer_search}`)
  }

  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(`https://api.punkapi.com/v2/beers?page=${this._page}&per_page=${this._per_page}`)
  }

}