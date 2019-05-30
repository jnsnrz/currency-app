import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-currency-item',
  templateUrl: './currency-item.component.html',
  styleUrls: ['./currency-item.component.scss']
})
export class CurrencyItemComponent implements OnInit {

  doesDataExist: boolean = false;

  @Input('element') element: any;

  constructor() { }

  useData(element) {
    this.doesDataExist = true; 
  }

  ngOnInit() {
  }

  ngOnChanges () {
    // Check if the data exists before using it
    if (this.element) {
        this.useData(this.element);
    }

  }
}
