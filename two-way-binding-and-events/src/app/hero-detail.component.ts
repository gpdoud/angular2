import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
	selector: 'hero-detail'
	,template: `
		<h3 *ngIf='hero'>Selected: {{hero.name}}</h3>
	`
	,styles: []
})
export class HeroDetailComponent {

	@Input() hero: Hero;
};
