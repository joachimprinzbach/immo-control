import {NgModule} from '@angular/core';
import {StepperPageComponent} from './stepper-page.component';
import {SharedModule} from "../shared/shared.module";
import {MatStepperModule, MatTooltipModule} from '@angular/material';
import {StepperComponent} from './stepper.component';
import {PreisnebenkostenComponent} from './step-2-kaufnebenkosten/preisnebenkosten.component';
import {KaufpreisMieteComponent} from './step-1-kaufpreis-miete/kaufpreis-miete.component';

@NgModule({
	declarations: [StepperPageComponent, StepperComponent, KaufpreisMieteComponent, PreisnebenkostenComponent],
	imports: [
		SharedModule,
		MatStepperModule,
		MatTooltipModule
	]
})
export class StepperModule {
}
