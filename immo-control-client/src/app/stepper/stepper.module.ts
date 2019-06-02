import {NgModule} from '@angular/core';
import {StepperPageComponent} from './stepper-page.component';
import {SharedModule} from "../shared/shared.module";
import {MatStepperModule, MatTooltipModule} from '@angular/material';
import { StepperComponent } from './stepper.component';
import {PriceRentalfeeComponent} from './step-1-price-rentalfee/price-rentalfee.component';

@NgModule({
	declarations: [StepperPageComponent, StepperComponent, PriceRentalfeeComponent],
	imports: [
		SharedModule,
		MatStepperModule,
		MatTooltipModule
	]
})
export class StepperModule {
}
