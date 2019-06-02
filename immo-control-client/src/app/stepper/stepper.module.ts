import {NgModule} from '@angular/core';
import {StepperPageComponent} from './stepper-page.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
	declarations: [StepperPageComponent],
	imports: [
		SharedModule
	]
})
export class StepperModule {
}
