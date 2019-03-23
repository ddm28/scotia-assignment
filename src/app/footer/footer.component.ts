import { Component, Input, OnInit } from '@angular/core';
import * as icon from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
	@Input() navMenu;

	icon = icon;

	constructor() {}

	ngOnInit() {}
}
