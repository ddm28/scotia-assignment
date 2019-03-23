import { Component, Input } from '@angular/core';
import * as icon from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
	@Input() navMenu;

	icon = icon;

	constructor() {}
}
