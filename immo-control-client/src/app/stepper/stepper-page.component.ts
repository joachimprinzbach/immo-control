import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {ImmoInvestment} from '../shared/model';
import {select, Store} from '@ngrx/store';
import {getSelectedImmoInvestment, NewState} from '../overview/redux/overview.reducer';
import {saveImmoInvestment, selectImmoInvestment} from '../overview/redux/overview.actions';

@Component({
	selector: 'imc-stepper-page',
	templateUrl: './stepper-page.component.html',
	styleUrls: ['./stepper-page.component.scss']
})
export class StepperPageComponent {

	selectedImmoInvestment$: Observable<ImmoInvestment>;
	selectedId;

	constructor(private route: ActivatedRoute, private store: Store<NewState>) {
		this.route.paramMap.subscribe(params => {
			this.selectedId = +params.get('id');
			this.store.dispatch(selectImmoInvestment({id: this.selectedId}));
		});
		this.selectedImmoInvestment$ = this.store.pipe(select(getSelectedImmoInvestment));
	}

	onImmoInvestmentChange(immoInvestment: ImmoInvestment) {
		this.store.dispatch(saveImmoInvestment({immoInvestment: Object.assign({}, immoInvestment, {id: this.selectedId})}));
	}
}
