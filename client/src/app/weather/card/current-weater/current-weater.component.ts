import { Component, Input, OnInit } from '@angular/core';
import { SimpleCondition } from '../../../../../../common/weather';

@Component({
  selector: 'wc-current',
  templateUrl: './current-weater.component.html',
  styleUrls: ['./current-weater.component.css']
})
export class CurrentWeaterComponent implements OnInit {
  @Input() data!: SimpleCondition;
  @Input() isRow = false;
  row_column_class: Record<string, boolean> = {};
  constructor() { }

  ngOnInit(): void {
    this.row_column_class = {
      wrow:this.isRow
    }
  }

}
