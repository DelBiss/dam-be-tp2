import { Component, OnInit, Input } from '@angular/core';
import { DailyCondition } from '../../../../../../common/weather';
@Component({
  selector: 'wc-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.css']
})
export class ObservationComponent implements OnInit {
  @Input() data!: DailyCondition;
  constructor() { }

  ngOnInit(): void {
    
  }

}
