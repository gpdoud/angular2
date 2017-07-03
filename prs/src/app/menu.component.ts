import { Component } from '@angular/core';

@Component({
	selector: 'menu-item'
	,template: `
		<li>
			<a [hidden]="!visible" href='{{href}}'>{{display}}</a>
		</li>	`
	,styles: []
})

export class MenuComponent {

	display: string;
	href: string;
	visible: boolean;

	constructor(display: string, href: string, visible: boolean) {
		this.display = display;
		this.href = href;
		this.visible = visible;
	}
}