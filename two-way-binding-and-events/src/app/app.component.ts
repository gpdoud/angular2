import { Component } from '@angular/core';
import { Hero } from './hero';

// export class Hero {
// 	id: number;
// 	name: string;
// }

@Component({
  selector: 'app-root'
  ,template: `
  	<h1>{{title}}</h1>
  	<h3>Hero List</h3>
  	<ul>
  		<li *ngFor='let hero of heroes' (click)='Select(hero)'>
  			<span>{{hero.id}}</span> {{hero.name}}
  		</li>
  	</ul>
  `
  ,styles: []
})
export class AppComponent {
  title = 'Tour of Heros';
  HEROES: Hero[] = [
  	{ id: 10, name: 'Adam Ant' }
  	,{ id: 20, name: 'Bob Brown' }
  	,{ id: 30, name: 'Chaz Carson' }
  	,{ id: 40, name: 'Dave Dawson' }
  	,{ id: 50, name: 'Ernie Elmore' }
  	,{ id: 60, name: 'Fred Flintstone' }
  	,{ id: 70, name: 'Glen Goofy' }
  	,{ id: 80, name: 'Henry Harrison' }
  	,{ id: 90, name: 'Ivan Isnore' }
  ];

  heroes = this.HEROES;

  Select(hero: Hero) {
  	console.log(hero);
  }
};
