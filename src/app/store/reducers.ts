import * as fromAction from './actions';
import { Menu, MenuItem } from './menu-model';

export interface MenuState {
	menu: MenuItem[];
	error: string;
}

export const initialState: MenuState = {
	menu: [],
	error: null,
};

export function reducers(state = initialState, action: fromAction.AppActions) {
	switch (action.type) {
		case fromAction.ActionTypes.GetMenuSuccess:
			return {
				...state,
				menu: action.payload,
				error: null,
			};

		case fromAction.ActionTypes.GetMenuFailure:
			return {
				...state,
				menu: null,
				error: action.payload,
			};

		default:
			return state;
	}
}
