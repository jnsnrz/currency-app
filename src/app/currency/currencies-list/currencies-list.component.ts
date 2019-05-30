import { Component, OnInit } from '@angular/core';

import { CurrencyService } from '../../currency.service';

@Component({
  selector: 'app-currencies-list',
  templateUrl: './currencies-list.component.html',
  styleUrls: ['./currencies-list.component.scss']
})
export class CurrenciesListComponent implements OnInit {

  currencyList: [];

  currencyExchange: any;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {

    this.currencyService.getCurrenciesList().subscribe(data => {
      this.currencyList = data;
      console.log(this.currencyList);
    });


    this.currencyService.getExchange('USD', '20190516', true);

  }

}
