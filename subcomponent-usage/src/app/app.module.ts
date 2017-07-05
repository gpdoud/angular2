import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaseComponent } from './base.component'; 
import { SubComponent } from './sub.component';

@NgModule({
  declarations: [
    AppComponent
    ,BaseComponent
    ,SubComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
