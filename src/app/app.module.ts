import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FormValidationComponent } from './form/form.component';
import { RouterModule, Routes }   from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FacebookLoginComponent } from './login/facebook-login/facebook-login.component';
import {LoginService} from "./login/login.service";
import { TinderComponent } from './tinder/tinder.component';
import {TinderService} from './tinder/tinder.service';
import {Place} from './objects/place';
import {AppRoutingModule} from './app-routing.module';
import {ReviewPlaceComponent} from './review-place/review-place.component';
import {SebmGoogleMap} from 'angular2-google-maps/core';
import { ResultsComponent } from './results/results.component';
import {AgmCoreModule} from 'angular2-google-maps/core/index';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormValidationComponent,
    LoginComponent,
    FacebookLoginComponent,
    TinderComponent,
    ReviewPlaceComponent,
    ResultsComponent
      ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBdTdq_6__dbH9_ilXX7zfsw8scRhQll3I' })],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [LoginService, TinderService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
