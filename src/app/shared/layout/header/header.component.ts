import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/services/beer.service'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Beer } from '../../../services/beer.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public beers: Beer[] = [];
  private _searchText: string = "";

  constructor(private _beerService: BeerService) { }

  ngOnInit(): void {
    this._beerService.getBeers().subscribe(data => {
      this.beers = data;
    });
  }

  onSearchPress(): void {
    this._beerService.setFilter(this._searchText);
    this._beerService.getSearchedBeers().subscribe(data => {
      this.beers = data;
    });

    window.scroll(0, 0);
  }
}
