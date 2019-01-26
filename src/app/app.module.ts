import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DexieTestComponent } from './dexie-test/dexie-test.component';
// import {TxtServiceService} from './app/txt-service.service';
// import Dexie from 'dexie';

// import {TxtServiceService} from "./app/txt-service.service"
@NgModule({
  declarations: [
    AppComponent,
    DexieTestComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [
    // TxtServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
