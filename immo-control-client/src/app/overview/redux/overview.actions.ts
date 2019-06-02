import {createAction, props, union} from '@ngrx/store';
import {ImmoInvestment} from '../../shared/model';

export const loadImmoInvestments = createAction(
	'Load Immo Investments',
	props<{}>()
);

export const loadImmoInvestmentsFailure = createAction(
	'Load Immo Investments Failure',
	props<{ errorMsg: string }>()
);

export const loadImmoInvestmentsSuccess = createAction(
	'Load Immo Investments Success',
	props<{ immoInvestments: ImmoInvestment[] }>()
);

const all = union({loadImmoInvestments, loadImmoInvestmentsFailure, loadImmoInvestmentsSuccess});
export type OverviewActions = typeof all;