import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BeerService } from 'src/app/services/beer.service';
import { Beer } from 'src/app/services/beer.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public beers: Beer[] = [];

  constructor(private _beerService: BeerService) { }

  ngOnInit(): void {
    this._beerService.getBeers().subscribe(data => {
      this.beers = data;
    });
  }

  hasPrevious(): boolean {
    return this._beerService.getPage() > 1
  }

  onPreviousPress(): void {
    this._beerService.prevPage();
    this._beerService.getBeers().subscribe(data => {
      this.beers = data;
    });

    window.scroll(0, 0);
  }

  onNextPress(): void {
    this._beerService.nextPage();
    this._beerService.getBeers().subscribe(data => {
      this.beers = data;
    });

    window.scroll(0, 0);
  }

}
