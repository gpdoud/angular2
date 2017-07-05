import { Component, Input } from '@angular/core';

import { MenuComponent } from './menu.component';

@Component({
  selector: 'menu-list'
  ,template: `
	  	<nav>
	  		<ul>
	  			<li *ngFor='let menu of menus' title='{{menu.tooltip}}'>
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
			new MenuComponent('Purchase Request','/', 'System name', true)
			,new MenuComponent('Menu1','/menu1', '1st menu', true)
			,new MenuComponent('Menu2','/menu2', '2nd menu', true)
			,new MenuComponent('Menu3','/menu3', '3rd menu', true)
			,new MenuComponent('Menu4','/menu4', '4th menu', true)
			,new MenuComponent('Menu5','/menu5', '5th menu', true)
		];
	}
}
