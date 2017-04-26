import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {rootRouting} from '../routes/app.routes';


// Must export the config
export const firebaseConfig = {
    apiKey: 'AIzaSyCmPSd1GnvC4qZ9GAR897tFPlE6zMeZ9Dk',
    authDomain: 'bergen-brettspill.firebaseapp.com',
    databaseURL: 'https://bergen-brettspill.firebaseio.com',
    storageBucket: 'bergen-brettspill.appspot.com',
    messagingSenderID: '993264237890'
  };
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    rootRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


