import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ParameterComponent } from './parameter.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' }
	,{ path: 'home', component: HomeComponent }
	,{ path: 'about', component: AboutComponent }
	,{ path: 'parm/:id', component: ParameterComponent }
];

@NgModule({
	// imports: [ RouterModule.forRoot(routes, { enableTracing: true }) ]
	imports: [ RouterModule.forRoot(routes) ]
	,exports: [ RouterModule ]
})

export class AppRoutingModule {}