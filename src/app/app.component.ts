import { GetMenuRequest } from './store/actions';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { take } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'demo';

	constructor(private store: Store<any>) {}

	ngOnInit() {
		this.store.dispatch(new GetMenuRequest());
	}

	navMenu = [
		{
			name: 'Home',
			icon: 'faHome',
			link: '#',
			type: 'btn',
			id: 1,
		},
		{
			name: 'About',
			icon: 'faInfoCircle',
			link: '#',
			type: 'btn',
			id: 2,
		},
		{
			name: 'Contant',
			link: '#',
			type: 'btn',
			id: 4,
		},
		{
			name: 'Menu',
			type: 'dropdown',
			id: 3,
			items: [
				{
					name: 'Option1',
					link: '#',
				},
				{
					name: 'Option2',
					link: '#',
				},
				{
					name: 'Option3',
					link: '#',
				},
			],
		},
	];
}
