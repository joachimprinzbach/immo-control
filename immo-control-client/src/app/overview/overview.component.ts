import {Component, Input} from '@angular/core';
import {ImmoInvestment} from '../shared/model';

@Component({
	selector: 'imc-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.sass']
})
export class OverviewComponent {

	@Input()
	immoInvestments: ImmoInvestment[];
}
