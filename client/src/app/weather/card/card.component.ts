import { Component, OnInit , Input} from '@angular/core';
import { Data } from '@angular/router';

import { SimpleWttrObject } from '../../../../../common/weather';

@Component({
  selector: 'weather-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data!: SimpleWttrObject;
  @Input() view!: string;
  
  constructor() { }

  ngOnInit(): void {
    console.log("CARD",this.view)
  }

}
