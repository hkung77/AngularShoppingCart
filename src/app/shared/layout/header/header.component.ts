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
  public faSearch = faSearch;

  constructor(private _beerService: BeerService) { }

  ngOnInit(): void { }

  onSearchPress(searchText: string): void {
    this._beerService.setFilter(searchText);
    if (searchText.length > 0) {
      this._beerService.getSearchedBeers().subscribe(data => {
        this._beerService.setBeers(data);
      });
    } else {
      this._beerService.getBeers().subscribe(data => {
        this._beerService.setBeers(data);
      })
    }

    window.scroll(0, 0);
  }
}
