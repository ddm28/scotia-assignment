import { Component, Input } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
	selector: 'app-wide-content',
	templateUrl: './wide-content.component.html',
	styleUrls: ['./wide-content.component.scss'],
})
export class WideContentComponent {
	@Input() item;

	constructor() {}
}
