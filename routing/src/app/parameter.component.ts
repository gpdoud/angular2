import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'parameter-comp'
	,template: '<h3>ParameterComponent</h3><h5>Parameter {{id}}</h5>'
})
export class ParameterComponent implements OnInit {
	
	public id;

	constructor(
		private route: ActivatedRoute
		,private location: Location
	) {}

	ngOnInit() : void {
		// this.id = this.route.snapshot.paramMap.get('id');
		this.route.paramMap
			.switchMap((params: ParamMap) => params.get('id'))
			.subscribe(id => this.id = id);
	}
}