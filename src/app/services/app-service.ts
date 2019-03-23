import { of, Observable } from 'rxjs';
import { MenuItem } from '../store/menu-model';

export class MenuDataService {
	constructor() {}

	private foodMenu: MenuItem[] = [
		{
			name: 'wings',
			price: '$9.90',
		},
		{
			name: 'nachos',
			price: '$12.90',
		},
		{
			name: 'soup',
			price: '$4.90',
		},
		{
			name: 'chowder',
			price: '$7.50',
		},
		{
			name: 'pizza',
			price: '$8.90',
		},
		{
			name: 'spaghetti',
			price: '$11.80',
		},
		{
			name: 'burger',
			price: '$7.95',
		},
		{
			name: 'salad',
			price: '$7.75',
		},
		{
			name: 'coffee',
			price: '$3.95',
		},
		{
			name: 'tea',
			price: '$2.90',
		},
	];

	getMenuData(): MenuItem[] {
		return this.foodMenu;
	}
}
