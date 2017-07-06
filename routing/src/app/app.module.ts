import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';



@NgModule({
  declarations: [
    AppComponent
    ,HomeComponent
    ,AboutComponent
  ],
  imports: [
    BrowserModule
	,RouterModule.forRoot([
		{
			path: 'home'
			,component: HomeComponent
		}
		,{
			path: 'about'
			,component: AboutComponent
		}
	])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
