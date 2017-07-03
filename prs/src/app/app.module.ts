import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TheHeadingComponent } from './the-heading.component';
import { MenuListComponent } from './menu-list.component';
import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [
    AppComponent
    ,TheHeadingComponent
    ,MenuListComponent
    ,MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
