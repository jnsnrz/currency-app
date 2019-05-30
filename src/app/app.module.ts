import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CurrenciesListComponent } from './currency/currencies-list/currencies-list.component';
import { CurrencyTableComponent } from './currency/currency-table/currency-table.component';
import { CurrencyChartComponent } from './currency/currency-chart/currency-chart.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyItemComponent } from './currency/currency-item/currency-item.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrenciesListComponent,
    CurrencyTableComponent,
    CurrencyChartComponent,
    CurrencyItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
