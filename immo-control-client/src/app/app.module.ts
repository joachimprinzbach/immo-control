import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderModule} from "./header/header.module";
import {FooterModule} from "./footer/footer.module";
import {OverviewModule} from "./overview/overview.module";
import {StepperModule} from "./stepper/stepper.module";
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {metaReducers, ROOT_REDUCERS} from './app.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {registerLocaleData} from '@angular/common';
import localDe from '@angular/common/locales/de';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

registerLocaleData(localDe, 'de');

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HeaderModule,
		FooterModule,
		OverviewModule,
		StepperModule,
		StoreModule.forRoot(ROOT_REDUCERS, {
			metaReducers,
		}),
		StoreRouterConnectingModule.forRoot(),
		EffectsModule.forRoot([]),
		StoreDevtoolsModule.instrument({
			name: 'Immo Control'
		}),

	],
	providers: [
		{
			provide: STEPPER_GLOBAL_OPTIONS,
			useValue: {displayDefaultIndicatorType: false}
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
