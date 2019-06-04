import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, switchMap,} from 'rxjs/operators';

import {
	loadImmoInvestments,
	loadImmoInvestmentsFailure,
	loadImmoInvestmentsSuccess,
	saveImmoInvestment, saveImmoInvestmentFailure,
	saveImmoInvestmentSuccess
} from './overview.actions';
import {ImmoInvestmentService} from '../immo-investment.service';
import {ImmoInvestment} from '../../shared/model';

@Injectable()
export class ImmoInvestmentEffects {

	@Effect()
	loadImmoInvestments$ = () =>
		this.actions$.pipe(
			ofType(loadImmoInvestments.type),
			switchMap(() =>
				this.immoInvestmentService.getImmoInvestments().pipe(
					map((immoInvestments: ImmoInvestment[]) => {
						return loadImmoInvestmentsSuccess({immoInvestments})}
					),
					catchError(error =>
						of(loadImmoInvestmentsFailure({errorMsg: error}))
					)
				)
			)
		);

	@Effect()
	saveImmoInvestment$ = () =>
		this.actions$.pipe(
			ofType(saveImmoInvestment.type),
			switchMap(({immoInvestment}) =>
				this.immoInvestmentService.saveImmoInvestment(immoInvestment).pipe(
					map((immoInvestment: ImmoInvestment) => {
						return saveImmoInvestmentSuccess({immoInvestment})}
					),
					catchError(error =>
						of(saveImmoInvestmentFailure({errorMsg: error}))
					)
				)
			)
		);

	constructor(
		private actions$: Actions,
		private immoInvestmentService: ImmoInvestmentService
	) {
	}
}