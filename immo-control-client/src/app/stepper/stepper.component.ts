import {Component, Input} from '@angular/core';
import {ImmoInvestment} from '../shared/model';

@Component({
	selector: 'imc-stepper',
	templateUrl: './stepper.component.html',
	styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {

	@Input()
	selectedImmoInvestment: ImmoInvestment;
}
