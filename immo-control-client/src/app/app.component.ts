import {Component, OnInit} from '@angular/core';
import {loadImmoInvestments} from './overview/redux/overview.actions';
import {Store} from '@ngrx/store';
import {NewState} from './overview/redux/overview.reducer';

@Component({
	selector: 'imc-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	constructor(private store: Store<NewState>) {
	}

	ngOnInit(): void {
		this.store.dispatch(loadImmoInvestments);
	}

}
