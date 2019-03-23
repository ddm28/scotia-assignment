import { Action } from '@ngrx/store';
import { Menu, MenuItem } from './menu-model';

export enum ActionTypes {
	GetMenuRequest = '[Pizza App] Get Menu - Request',
	GetMenuSuccess = '[Pizza App] Get Menu - Success',
	GetMenuFailure = '[Pizza App] Get Menu - Failure',
}

export class GetMenuRequest implements Action {
	readonly type = ActionTypes.GetMenuRequest;
}

export class GetMenuSuccess implements Action {
	readonly type = ActionTypes.GetMenuSuccess;
	constructor(public payload: MenuItem[]) {}
}

export class GetMenuFailure implements Action {
	readonly type = ActionTypes.GetMenuFailure;
	constructor(public payload: Menu) {}
}

export type AppActions = GetMenuRequest | GetMenuSuccess | GetMenuFailure;
