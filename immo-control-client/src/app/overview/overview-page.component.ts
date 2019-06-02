import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ImmoInvestment} from '../shared/model';
import {Observable} from 'rxjs';
import {getImmoInvestments, getLoading, NewState} from './redux/overview.reducer';

@Component({
	selector: 'imc-overview-page',
	templateUrl: './overview-page.component.html',
	styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent {

	immoInvestments$: Observable<ImmoInvestment[]>;
	loading$: Observable<boolean>;

	constructor(private store: Store<NewState>) {
		this.immoInvestments$ = store.pipe(select(getImmoInvestments));
		this.loading$ = store.pipe(select(getLoading));
	}

}
