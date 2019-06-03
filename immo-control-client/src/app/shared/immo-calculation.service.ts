import {Injectable} from '@angular/core';
import {Bundesland} from './model';

@Injectable({
	providedIn: 'root'
})
export class ImmoCalculationService {

	states: Bundesland[] = [
		{ name: 'Baden-Wuerttemberg', steuersatz: 0.05, maklerProvisionKaeufer: 0.0357},
		{ name: 'Bayern', steuersatz: 0.035, maklerProvisionKaeufer: 0.0357},
		{ name: 'Berlin', steuersatz: 0.06, maklerProvisionKaeufer: 0.0714},
		{ name: 'Brandenburg', steuersatz: 0.065, maklerProvisionKaeufer: 0.0714},
		{ name: 'Bremen', steuersatz: 0.05, maklerProvisionKaeufer: 0.0595},
		{ name: 'Hamburg', steuersatz: 0.045, maklerProvisionKaeufer: 0.0625},
		{ name: 'Hessen', steuersatz: 0.06, maklerProvisionKaeufer: 0.0595},
		{ name: 'Mecklenburg-Vorpommern', steuersatz: 0.05, maklerProvisionKaeufer: 0.0357},
		{ name: 'Niedersachsen', steuersatz: 0.05, maklerProvisionKaeufer: 0.0357},
		{ name: 'Nordrhein-Westfalen', steuersatz: 0.065, maklerProvisionKaeufer: 0.0357},
		{ name: 'Rheinland-Pfalz', steuersatz: 0.05, maklerProvisionKaeufer: 0.0357},
		{ name: 'Saarland', steuersatz: 0.065, maklerProvisionKaeufer: 0.0357},
		{ name: 'Sachsen', steuersatz: 0.035, maklerProvisionKaeufer: 0.0357},
		{ name: 'Sachsen-Anhalt', steuersatz: 0.05, maklerProvisionKaeufer: 0.0357},
		{ name: 'Schleswig-Holstein', steuersatz: 0.065, maklerProvisionKaeufer: 0.0357},
		{ name: 'Thüringen', steuersatz: 0.065, maklerProvisionKaeufer: 0.0357}
	];

	pricePerSquareMeter(kaufpreis: number, wohnflaeche: number): number {
		return (kaufpreis > 0 && wohnflaeche > 0) ? kaufpreis / wohnflaeche : 0
	}

	bruttoMietRendite(kaufpreis: number, monatsNettoKaltmiete: number): number {
		return (kaufpreis > 0 && monatsNettoKaltmiete > 0) ? monatsNettoKaltmiete * 12 / kaufpreis : 0
	}

	getStates() {
		return this.states;
	}
}
