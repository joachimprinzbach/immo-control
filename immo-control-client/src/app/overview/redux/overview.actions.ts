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

export const saveImmoInvestment = createAction(
	'Save Immo Investment',
	props<{ immoInvestment: ImmoInvestment }>()
);

export const saveImmoInvestmentFailure = createAction(
	'Save Immo Investment Failure',
	props<{ errorMsg: string }>()
);

export const saveImmoInvestmentSuccess = createAction(
	'Save Immo Investment Success',
	props<{ immoInvestment: ImmoInvestment }>()
);

export const selectImmoInvestment = createAction(
	'Select ImmoInvestment',
	props<{ id: number }>()
);

const all = union({
	loadImmoInvestments,
	loadImmoInvestmentsFailure,
	loadImmoInvestmentsSuccess,
	saveImmoInvestment,
	saveImmoInvestmentFailure,
	saveImmoInvestmentSuccess,
	selectImmoInvestment
});
export type OverviewActions = typeof all;