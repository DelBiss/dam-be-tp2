import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, Subscription  } from 'rxjs';
import { EMPTY_SUBSCRIPTION } from 'rxjs/internal/Subscription';
import { environment } from 'src/environments/environment';
import { WttrObject, ConvertWttrArray, SimpleWttrObject, WttrResponse } from '../../../common/weather';


/*
* Service pour les opérations en lien avec la météo
*/
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private runningQuery:{[key:string]:{sub:Subscription,obs:Observable<SimpleWttrObject[]>}} = {};
  private queryOrder:string[] = [];
  private currentSub:Subscription = EMPTY_SUBSCRIPTION
  constructor(private _httpClientModule: HttpClient) {
  }
  
  //Permet de retourner le sujet et de d'initialiser
  //le sujet à la ville par défaut si c'est la première requête
  //vous pouvez vous abonnez à data pour obtenir les données météos
  get data(): BehaviorSubject<SimpleWttrObject[]>{
    if(!this._data){
      this._data = new BehaviorSubject<SimpleWttrObject[]>([]);
      this.getWeathers().subscribe({
        error:err => (console.error(err))
      });
    }
    return this._data;
  }

  //Conserve le sujet
  private _data?: BehaviorSubject<SimpleWttrObject[]>;
  
  IsInProgress(locations: string): boolean {
    return locations in this.runningQuery;
  }

  UnsubUntil(locations:string):void{
    const index = this.queryOrder.findIndex(x=>x==locations)
    if(index>-1){
      for (const queryString of this.queryOrder.slice(0,index)) {
        console.log("WeatherService","Unsubscribe",queryString)
        this.runningQuery[queryString].sub.unsubscribe();
        this.queryOrder = this.queryOrder.filter(x=>x!=queryString)
      }
    }
  }

  registerQuery(locations:string,obs:Observable<SimpleWttrObject[]>,sub:Subscription):void{
    this.runningQuery[locations] = {obs:obs,sub:sub};
    this.queryOrder.push(locations);
  }
  //Lance une recherche météo pour une série de ville
  getWeathers(locations: string = environment.defaultLocation): Observable<SimpleWttrObject[]> {
    if(this.IsInProgress(locations)){
      this.queryOrder = this.queryOrder.filter(x=>x!=locations)
      this.queryOrder.push(locations)
      return this.runningQuery[locations].obs
    }
    
    const url = `${environment.apiBaseUrl}/weather?locations=${locations}`
    console.log("[Weather.service]","getWeathers()","Recherche pour", locations,url)
    //On envoie également l'information dans le behaviorSubject un component va pouvoir s'abonner et reçevoir l'information
    const obsData:Observable<SimpleWttrObject[]> = this._httpClientModule.get<WttrResponse>(url)
        .pipe(
          map(
            (wData) => ConvertWttrArray(wData.data)
          )
        );

    const sub = obsData.subscribe(
      {
        next: data => {
          this.UnsubUntil(locations)
          this.data.next(data);
          console.log("[Weather.service]","getWeathers()","[http.subscribe.next]","Prochaine valeur:", data);
        },
        error: err => console.error("[Weather.service]","getWeathers()","[http.subscribe.error]","Erreur lancée:", err),
        complete: () => console.log("[Weather.service]","getWeathers()","[http.subscribe.complete]","Observation complétée pour", locations)
      }
    )

    this.registerQuery(locations,obsData, sub)
    return obsData
  }
}
