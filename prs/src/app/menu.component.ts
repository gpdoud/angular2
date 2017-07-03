import { Component } from '@angular/core';

@Component({
	selector: 'menu'
	,template: ''
	,styles: []
})
export class Menu {
	display: string;
	href: string;
	visible: boolean;

	constructor(display: string, href: string, visible: boolean) {
		this.display = display;
		this.href = href;
		this.visible = visible;
	}
}