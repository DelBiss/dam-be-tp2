import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthComponent } from './auth/auth.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  //On redirige / vers /weather
  {path:'',pathMatch:'full', redirectTo:'weather/now'},

  //canActivate: [AuthGuard] permet de bloquer 
  //une route si l'utilisateur n'est pas login
  
  {path:'weather', redirectTo:'weather/now'},
  {path:'weather/now', component: WeatherComponent, data: {view: 'now'}, canActivate: [AuthGuard]},
  {path:'weather/days', component: WeatherComponent, data: {view: 'days'}, canActivate: [AuthGuard]},

  //Route pour la page d'authentification
  {path:'auth', component: AuthComponent },


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
