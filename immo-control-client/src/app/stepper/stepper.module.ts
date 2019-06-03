import {NgModule} from '@angular/core';
import {StepperPageComponent} from './stepper-page.component';
import {SharedModule} from "../shared/shared.module";
import {MatStepperModule, MatTooltipModule} from '@angular/material';
import {StepperComponent} from './stepper.component';
import {PreisnebenkostenComponent} from './step-2-kaufnebenkosten/preisnebenkosten.component';
import {KaufpreisMieteComponent} from './step-1-kaufpreis-miete/kaufpreis-miete.component';
import {MassnahmenComponent} from './step-3-massnahmen/massnahmen.component';
import {FinanzierungComponent} from './step-4-finanzierung/finanzierung.component';
import {HausgeldRuecklagenComponent} from './step-5-hausgeld-ruecklagen/hausgeld-ruecklagen.component';
import {ZinsenComponent} from './step-6-zinsen/zinsen.component';
import {SteuernComponent} from './step-7-steuern/steuern.component';

@NgModule({
	declarations: [
		StepperPageComponent,
		StepperComponent,
		KaufpreisMieteComponent,
		PreisnebenkostenComponent,
		MassnahmenComponent,
		FinanzierungComponent,
		HausgeldRuecklagenComponent,
		ZinsenComponent,
		SteuernComponent
	],
	imports: [
		SharedModule,
		MatStepperModule,
		MatTooltipModule
	]
})
export class StepperModule {
}
