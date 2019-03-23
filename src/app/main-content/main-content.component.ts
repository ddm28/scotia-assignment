import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-main-content',
	templateUrl: './main-content.component.html',
	styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
	@Input() item: any;
	@Input() indx: number;

	evenRow = false;

	constructor() {}

	ngOnInit() {
		this.evenRow = !!(this.indx % 2);
	}
}
