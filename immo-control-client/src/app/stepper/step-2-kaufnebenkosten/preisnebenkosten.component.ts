import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ImmoInvestment} from '../../shared/model';

interface Bundesland {
	name: string;
	steuersatz: number;
	maklerProvisionKaeufer: number;
}

@Component({
	selector: 'imc-preisnebenkosten',
	templateUrl: './preisnebenkosten.component.html',
	styleUrls: ['./preisnebenkosten.component.scss']
})
export class PreisnebenkostenComponent implements OnInit {

	@Input()
	selectedImmoInvestment: ImmoInvestment;

	formPreisnebenkosten: FormGroup;
	filteredStates: Observable<Bundesland[]>;
	states: Bundesland[] = [
		{ name: 'Baden-Württemberg', steuersatz: 0.05, maklerProvisionKaeufer: 0.0357},
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

	constructor(private formBuilder: FormBuilder) {
		this.formPreisnebenkosten = this.formBuilder.group({
			bundesland: ['', Validators.required]
		});
		this.filteredStates = this.formPreisnebenkosten.get('bundesland').valueChanges
			.pipe(
				startWith(''),
				map(state => state ? this._filterStates(state) : this.states.slice())
			);
	}

	ngOnInit(): void {
	}

	private _filterStates(value: string): Bundesland[] {
		const filterValue = value.toLowerCase();
		return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
	}

	get selectedSteuersatz() {
		return this.getSelectedValueForBundesland((bundesland: Bundesland) => bundesland.steuersatz);
	}

	get selectedMaklerProvisionKaeufer() {
		return this.getSelectedValueForBundesland((bundesland: Bundesland) => bundesland.maklerProvisionKaeufer);
	}

	private getSelectedValueForBundesland(propertyFn: (bundesland: Bundesland) => any) {
		let bundesland: string = this.formPreisnebenkosten.get('bundesland').value;
		return bundesland ? this.states.filter(state => state.name.toLowerCase().indexOf(bundesland.toLowerCase()) === 0).map(propertyFn)[0] : 0;
	}

}
