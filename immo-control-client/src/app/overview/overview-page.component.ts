import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {loadImmoInvestments} from './redux/overview.actions';
import {ImmoInvestment} from '../shared/model';
import {Observable} from 'rxjs';
import {getImmoInvestments, getLoading, NewState, OverviewState} from './redux/overview.reducer';

@Component({
	selector: 'imc-overview-page',
	templateUrl: './overview-page.component.html',
	styleUrls: ['./overview-page.component.sass']
})
export class OverviewPageComponent implements OnInit {

	immoInvestments$: Observable<ImmoInvestment[]>;
	loading$: Observable<boolean>;

	constructor(private store: Store<NewState>) {
		this.immoInvestments$ = store.pipe(select(getImmoInvestments));
		this.loading$ = store.pipe(select(getLoading));
	}

	ngOnInit() {
		this.store.dispatch(loadImmoInvestments);
		this.immoInvestments$.subscribe(i => {
			console.log("Hans" + i);
		})
	}

}
