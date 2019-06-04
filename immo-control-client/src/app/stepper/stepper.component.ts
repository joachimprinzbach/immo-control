import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ImmoInvestment} from '../shared/model';
import {StepperSelectionEvent} from '@angular/cdk/stepper';

@Component({
	selector: 'imc-stepper',
	templateUrl: './stepper.component.html',
	styleUrls: ['./stepper.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepperComponent {

	@Input()
	selectedImmoInvestment: ImmoInvestment;

	@Output()
	immoInvestmentChange: EventEmitter<ImmoInvestment> = new EventEmitter();

	onStepSelectionChange(event: StepperSelectionEvent) {
		if(!event.previouslySelectedStep.hasError) {
			this.immoInvestmentChange.emit(event.previouslySelectedStep.stepControl.value);
		}
	}
}
