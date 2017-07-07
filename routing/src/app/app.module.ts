import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { AppRoutingModule } from './app-routing.module';
import { ParameterComponent } from './parameter.component';


@NgModule({
  declarations: [
    AppComponent
    ,HomeComponent
    ,AboutComponent
    ,ParameterComponent
  ],
  imports: [
    BrowserModule
	,AppRoutingModule
	,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
