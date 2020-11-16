import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
  @Input('value') itmValue:string;
  constructor() { }
  ngOnChanges(changeValue:SimpleChanges){
    if(changeValue.itmValue){
      this.itmValue = changeValue.itmValue.currentValue
    }
  }
  ngOnInit(): void {
  }

}
