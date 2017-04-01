import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
	  	<h1>{{title}}</h1>
	  	<nav>
	  		<!-- routerLink indicates a route path -->
		  	<a routerLink='/dashboard'>Dashboard</a>
		  	<a routerLink='/heroes'>Heros</a>
	  	</nav>
	  	<!-- <router-outlet> is the tag where the route template is displayed -->
	  	<router-outlet></router-outlet>
	`
})

export class AppComponent {
  title = 'Tour of Heroes in Angular2';
}