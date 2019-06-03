import {Injectable} from '@angular/core';
import {Configuration} from './model';
import {Observable, of} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ConfigurationService {

	constructor() {
	}

	getConfiguration(): Observable<Configuration> {
		return of(
			{
				bruttoMietRendite: {
					bad: 0.05,
					ok: 0.055,
					good: 0.06
				},
				nettoMietRendite: {
					bad: 0.035,
					ok: 0.04,
					good: 0.045
				},
				eigenKapitalRendite: {
					bad: 0.05,
					ok: 0.1,
					good: 0.2
				},
				cashFlowOperativ: {
					bad: 0,
					ok: 0,
					good: 0
				},
				cashFlowNachSteuern: {
					bad: 0,
					ok: 0,
					good: 0
				}
			}
		);
	}
}
