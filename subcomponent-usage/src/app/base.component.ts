import { Component } from '@angular/core';


@Component({
	selector: 'base-comp'
	,template: `
		<h5>
			<p>Base Component</p>
			<sub-comp></sub-comp>
		</h5>
	`
	,styles: []
})
export class BaseComponent {
	
}