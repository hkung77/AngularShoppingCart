import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BeerService } from 'src/app/services/beer.service';
import { Beer } from 'src/app/services/beer.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private _beerService: BeerService) { }

  ngOnInit(): void {
    this._beerService.getBeers().subscribe(data => {
      this._beerService.setBeers(data);
    });
  }

  beers(): Beer[] {
    return this._beerService.beers;
  }


  hasPrevious(): boolean {
    return this._beerService.getPage() > 1
  }

  onPreviousPress(): void {
    this._beerService.prevPage();
    this.beerSearch()

    window.scroll(0, 0);
  }

  onNextPress(): void {
    this._beerService.nextPage();
    this.beerSearch();

    window.scroll(0, 0);
  }

  private beerSearch(): void {
    if (this._beerService._beer_search.length > 0) {
      this._beerService.getSearchedBeers().subscribe(data => {
        this._beerService.setBeers(data);
      });
    } else {
      this._beerService.getBeers().subscribe(data => {
        this._beerService.setBeers(data);
      });
    }
  }

}
