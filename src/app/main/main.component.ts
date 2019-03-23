import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
	foodMenu;

	content = [
		{
			narrow: {
				title: 'Our Unique Culinary Creations',
			},
			wide: {
				title: 'Fichipizza',
				text:
					'A unique combination of Mediterranean Italian pizza, topped with Mascarphone, proscutto, figs, grando, honey and arugula',
				link: 'http://www.pizza.com',
				linktext: 'More >>',
			},
		},
		{
			narrow: {
				title: "This Month's Promotions",
			},
			wide: {
				title: 'Weekend Grand Buffet',
				text:
					'Featuring mouthwatering combinations with a choice of different salads',
				link: '',
				linktext: 'More >>',
			},
		},
		{
			narrow: {
				title: 'Meet our Culinary Specialists',
			},
			wide: {
				title: 'Tommy McHugh',
				text:
					'Featuring mouthwatering combinations with a choice of different salads',
				link: '',
				linktext: 'More >>',
			},
		},
	];

	constructor(private store: Store<any>) {}

	ngOnInit() {
		this.store
			.pipe(
				select('menuState'),
				take(1)
			)
			.subscribe(data => {
				this.foodMenu = data.menu;
			});
	}
}
