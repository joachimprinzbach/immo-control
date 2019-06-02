import {Component, Input} from '@angular/core';
import {ImmoInvestment} from '../shared/model';
import {Router} from '@angular/router';

@Component({
	selector: 'imc-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

	@Input()
	immoInvestments: ImmoInvestment[];


	constructor(private router: Router) {
	}

	createNew() {
		this.router.navigate(['./stepper']);
	}
}
