import { Store, select } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as fromActions from './actions';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Menu, MenuItem } from './menu-model';
import { GetMenuSuccess } from './actions';
import { MenuDataService } from '../services/app-service';

@Injectable()
export class AppEffects {
	constructor(
		private action$: Actions,
		private store: Store<any>,
		private menuService: MenuDataService
	) {}

	@Effect({ dispatch: true })
	GetMenu$ = this.action$.pipe(
		ofType<any>(fromActions.ActionTypes.GetMenuRequest),
		switchMap(action => {
			return of(new GetMenuSuccess(this.menuService.getMenuData()));
		})
	);
}
