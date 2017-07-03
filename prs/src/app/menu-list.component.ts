import { Component, Input } from '@angular/core';

import { MenuComponent } from './menu.component';

@Component({
  selector: 'menu-list'
  ,template: `
	  	<nav>
	  		<ul>
	  			<li *ngFor='let menu of menus'>
	  				<a [hidden]="!menu.visible" href='{{menu.href}}'>{{menu.display}}</a>
	  			</li>
	  		</ul>
	  	</nav>
  	`
  ,styleUrls: [
  	'./menu-list.component.css'
  ]
  // ,templateUrl: './app.component.html'
  // ,styleUrls: ['./app.component.css']
})
export class MenuListComponent {
	about;
	menus : MenuComponent[];

	@Input() aMenu: MenuComponent;
	constructor() {
		this.about = "About MenuComponent";
		this.menus = [
			new MenuComponent('Menu1','/menu1', true)
			,new MenuComponent('Menu2','/menu2', false)
			,new MenuComponent('Menu3','/menu3', true)
			,new MenuComponent('Menu4','/menu4', false)
			,new MenuComponent('Menu5','/menu5', true)
		];
	}
}
