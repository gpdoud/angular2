import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

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
  	<hero-detail [hero]="selectedHero"></hero-detail>
  `
  ,styles: []
  ,providers: [HeroService]
})
export class AppComponent implements OnInit {
  title = 'Tour of Heros';
  heroes: Hero[];

  selectedHero: Hero;

  Select(hero: Hero) {
	this.selectedHero = hero;
	console.log(this.selectedHero);
  }

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
  	this.heroService.getHeroesSlowly()
  		.then(heroes => this.heroes = heroes);
  }

  ngOnInit() : void {
  	this.getHeroes();
  }
};
