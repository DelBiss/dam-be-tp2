import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { WeatherService } from '../weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private weathers: WeatherService,private router: Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    // console.log(f.valid, this.router.createUrlTree());  // false
    this.router.navigate(['.'],{queryParams:f.value}).then((b)=>{console.log("navigation finish",b)})
    // this.weathers.getWeathers(f.value["locations"]).subscribe()
  }
}
