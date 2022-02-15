import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, map, Observable, Subscription } from 'rxjs';
import { simpleWttrData } from 'src/app/mock_data';
import { SimpleWttrObject, ConvertWttrArray, WttrObject } from '../../../../common/weather';
import { WeatherService } from '../weather.service';
import { ActivatedRoute, Data } from '@angular/router';
import { filter } from 'rxjs';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
    public datas: BehaviorSubject<SimpleWttrObject[]>
    public view:string = "now"
    //SimpleWttrObject[] = []//simpleWttrData
    constructor(private weathers: WeatherService, private route: ActivatedRoute) {
        this.datas = this.weathers.data
    }

    ngOnInit(): void {
        this.route.data.subscribe(
            {
                next: x=>{
                    console.log(x);
                    this.view=x["view"]
                }
            }
        )
        this.weathers.data.subscribe(
            {
                next: x => {
                    // this.datas = x;
                    console.log("[Weather.component]", "[Weathers.data.subscribe.next]", "Prochaine valeur:", x);
                },
                error: err => console.error("[Weather.component]", "[Weathers.data.subscribe.error]", "Erreur lancée:", err),
                complete: () => console.log("[Weather.component]", "[Weathers.data.subscribe.complete]", "Observation complétée")
            });

        this.route.queryParamMap
            .pipe(
                filter(q=>q.has('locations'))
            )
            .subscribe({
                next: q => {
                    const loc = q.get('locations')
                    console.log("[Weather.component]", "[Query.Subscribre.next]", "Prochaine valeur:", loc);
                    this.weathers.getWeathers(loc as string);
                },
                error: err => console.error("[Weather.component]", "[Query.Subscribre.error]", "Erreur lancée:", err),
                complete: () => console.log("[Weather.component]", "[Query.Subscribre.complete]", "Observation complétée")
            })




    }

}
