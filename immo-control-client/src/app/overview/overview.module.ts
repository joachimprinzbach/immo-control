import {NgModule} from '@angular/core';
import {OverviewComponent} from "./overview.component";
import {SharedModule} from "../shared/shared.module";
import {OverviewPageComponent} from './overview-page.component';
import {EffectsModule} from '@ngrx/effects';
import {ImmoInvestmentEffects} from './redux/overview.effects';
import {StoreModule} from '@ngrx/store';
import {reducer} from './redux/overview.reducer';


@NgModule({
	declarations: [OverviewComponent, OverviewPageComponent],
	imports: [
		SharedModule,
		StoreModule.forFeature('overview', reducer),
		EffectsModule.forFeature([ImmoInvestmentEffects])
	],
	exports: [OverviewPageComponent]
})
export class OverviewModule {
}
