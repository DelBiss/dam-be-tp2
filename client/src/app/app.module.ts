import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { WeatherComponent } from './weather/weather.component';
import { CardComponent as WCardComponent } from './weather/card/card.component';
import { CurrentWeaterComponent } from './weather/card/current-weater/current-weater.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ObservationComponent } from './weather/card/observation/observation.component';
import { MilitaryTimePipe } from './military-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    WeatherComponent,
    WCardComponent,
    CurrentWeaterComponent,
    NavigationComponent,
    ObservationComponent,
    MilitaryTimePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
