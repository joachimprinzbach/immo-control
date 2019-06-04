import {
	loadImmoInvestments,
	loadImmoInvestmentsFailure,
	loadImmoInvestmentsSuccess,
	OverviewActions,
	saveImmoInvestment, saveImmoInvestmentFailure, saveImmoInvestmentSuccess, selectImmoInvestment
} from './overview.actions';
import {ImmoInvestment} from '../../shared/model';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {State} from '../../app.reducer';

export interface OverviewState {
	loading: boolean;
	immoInvestments: ImmoInvestment[];
	selectedImmoInvestment: ImmoInvestment;
}

export interface NewState extends State {
	overview: OverviewState
}
const initialState: OverviewState = {
	loading: false,
	selectedImmoInvestment: {},
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

		case saveImmoInvestment.type: {
			return {
				...state,
				loading: true,
			};
		}

		case saveImmoInvestmentSuccess.type: {
			return {
				...state,
				immoInvestments: state.immoInvestments.map(immoInvestment => {
					if(immoInvestment.id === action.immoInvestment.id) {
						return Object.assign({}, immoInvestment, action.immoInvestment);
					}
					return immoInvestment;
				}),
				selectedImmoInvestment: state.selectedImmoInvestment.id === action.immoInvestment.id ? action.immoInvestment : state.selectedImmoInvestment,
				loading: false,
			};
		}

		case saveImmoInvestmentFailure.type: {
			return {
				...state,
				loading: false,
			};
		}

		case selectImmoInvestment.type: {
			return {
				...state,
				selectedImmoInvestment: state.immoInvestments.find(i => i.id === action.id),
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
export const getSelectedImmoInvestment = createSelector(
	getOverviewState,
	(state: OverviewState) => state.selectedImmoInvestment
);