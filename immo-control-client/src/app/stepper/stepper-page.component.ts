import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ImmoInvestment} from '../shared/model';
import {filter, first, map, switchMap} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {getImmoInvestments, NewState} from '../overview/redux/overview.reducer';

@Component({
	selector: 'imc-stepper-page',
	templateUrl: './stepper-page.component.html',
	styleUrls: ['./stepper-page.component.scss']
})
export class StepperPageComponent implements OnInit {

	selectedImmoInvestment$: Observable<ImmoInvestment>;

	constructor(private route: ActivatedRoute, private store: Store<NewState>) {
	}

	ngOnInit(): void {
		this.selectedImmoInvestment$ = this.route.paramMap.pipe(
			switchMap(params => {
				let selectedId = +params.get('id');
				let immoInvestments$ = this.store.pipe(select(getImmoInvestments));
				if (!selectedId) {
					return of({});
				}
				return immoInvestments$.pipe(map(immoInvestments => immoInvestments.find(i => i.id === selectedId))).pipe(first());
			})
		);
	}
}
