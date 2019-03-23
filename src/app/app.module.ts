import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { WideContentComponent } from './wide-content/wide-content.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { AppEffects } from './store/effects';
import { EffectsModule } from '@ngrx/effects';
import { MenuDataService } from './services/app-service';

@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		MainComponent,
		FooterComponent,
		MainContentComponent,
		WideContentComponent,
	],
	imports: [
		BrowserModule,
		FontAwesomeModule,
		BsDropdownModule.forRoot(),
		TooltipModule.forRoot(),
		StoreModule.forRoot({ menuState: reducers }),
		EffectsModule.forRoot([AppEffects]),
	],
	providers: [MenuDataService],
	bootstrap: [AppComponent],
})
export class AppModule {}
