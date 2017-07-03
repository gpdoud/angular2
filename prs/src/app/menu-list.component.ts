import { Component, Input } from '@angular/core';

import { Menu } from 'app/menu.component';

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
	menus = new Array<Menu>();

	@Input() menu: Menu;
	constructor() {
		this.about = "About MenuComponent";
		this.menus.push(new Menu('Menu1','/menu1', true));
		this.menus.push(new Menu('Menu2','/menu2', true));
		this.menus.push(new Menu('Menu3','/menu3', true));
	}
}
