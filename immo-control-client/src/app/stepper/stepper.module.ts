import {NgModule} from '@angular/core';
import {StepperPageComponent} from './stepper-page.component';
import {SharedModule} from "../shared/shared.module";
import {MatStepperModule, MatTooltipModule} from '@angular/material';
import {StepperComponent} from './stepper.component';
import {PriceRentalfeeComponent} from './step-1-price-rentalfee/price-rentalfee.component';
import {PreisnebenkostenComponent} from './step-2-kaufnebenkosten/preisnebenkosten.component';

@NgModule({
	declarations: [StepperPageComponent, StepperComponent, PriceRentalfeeComponent, PreisnebenkostenComponent],
	imports: [
		SharedModule,
		MatStepperModule,
		MatTooltipModule
	]
})
export class StepperModule {
}
