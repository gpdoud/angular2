import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TheHeadingComponent } from './the-heading.component';
import { MenuListComponent } from './menu-list.component';

@NgModule({
  declarations: [
    AppComponent
    ,TheHeadingComponent
    ,MenuListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
