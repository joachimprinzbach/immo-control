import {loadImmoInvestments, loadImmoInvestmentsFailure, loadImmoInvestmentsSuccess, OverviewActions} from './overview.actions';
import {ImmoInvestment} from '../../shared/model';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {State} from '../../app.reducer';

export interface OverviewState {
	loading: boolean;
	immoInvestments: ImmoInvestment[];
}

export interface NewState extends State {
	overview: OverviewState
}
const initialState: OverviewState = {
	loading: false,
	immoInvestments: [],
};

export function reducer(
	state = initialState,
	action: OverviewActions
): OverviewState {
	switch (action.type) {
		case loadImmoInvestments.type: {
			return {
				...state,
				loading: true,
			};
		}

		case loadImmoInvestmentsSuccess.type: {
			return {
				...state,
				immoInvestments: action.immoInvestments,
				loading: false,
			};
		}

		case loadImmoInvestmentsFailure.type: {
			return {
				...state,
				loading: false,
			};
		}

		default: {
			return state;
		}
	}
}

export const getOverviewState = createFeatureSelector<NewState, OverviewState>("overview");
export const getImmoInvestments = createSelector(
	getOverviewState,
	(state: OverviewState) => state.immoInvestments
);
export const getLoading = createSelector(
	getOverviewState,
	(state: OverviewState) => state.loading
);