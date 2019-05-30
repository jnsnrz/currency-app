import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {

  urlList = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
  
  // USD Exchange
  urlExchange = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange';
  //?valcode=USD&date=20190516&json

  constructor(private http: HttpClient) { }

  getCurrenciesList(): Observable<any> {
    return this.http.get(this.urlList);
  }

  async getExchange(valcode: string, date: any, json: boolean) {
    try {
      const result = await this.http.get(`this.urlExchange?valcode=${valcode}&${date}&${json}`).toPromise();
    } catch (err) {
      console.log(err);
    }
  }
}
