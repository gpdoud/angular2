import { Component } from '@angular/core';

@Component({
  selector: 'the-heading'
  ,template: `<div style="font-size:1.5em">{{value}}</div>`
  ,styleUrls: []
  // ,templateUrl: './app.component.html'
  // ,styleUrls: ['./app.component.css']
})
export class TheHeadingComponent {
	value = "The Heading"
}
