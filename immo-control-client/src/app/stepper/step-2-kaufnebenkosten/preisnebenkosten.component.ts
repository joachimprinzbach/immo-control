import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Bundesland, ImmoInvestment} from '../../shared/model';
import {ImmoCalculationService} from '../../shared/immo-calculation.service';

@Component({
	selector: 'imc-preisnebenkosten',
	templateUrl: './preisnebenkosten.component.html',
	styleUrls: ['./preisnebenkosten.component.scss']
})
export class PreisnebenkostenComponent implements OnInit {

	@Input()
	selectedImmoInvestment: ImmoInvestment;

	form: FormGroup;
	filteredStates: Observable<Bundesland[]>;

	constructor(private formBuilder: FormBuilder, private immoCalculationService: ImmoCalculationService) {
		this.form = this.formBuilder.group({
			bundesland: ['', Validators.required]
		});
		this.filteredStates = this.form.get('bundesland').valueChanges
			.pipe(
				startWith(''),
				map(state => state ? this._filterStates(state) : this.immoCalculationService.getStates().slice())
			);
	}

	ngOnInit(): void {
		if(this.selectedImmoInvestment) {
			this.form.patchValue(this.selectedImmoInvestment);
		}
	}

	private _filterStates(value: string): Bundesland[] {
		const filterValue = value.toLowerCase();
		return this.immoCalculationService.getStates().filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
	}

	get selectedSteuersatz() {
		return this.getSelectedValueForBundesland((bundesland: Bundesland) => bundesland.steuersatz);
	}

	get selectedMaklerProvisionKaeufer() {
		return this.getSelectedValueForBundesland((bundesland: Bundesland) => bundesland.maklerProvisionKaeufer);
	}

	get bundesland() {
		return this.form.get('bundesland').value;
	}

	private getSelectedValueForBundesland(propertyFn: (bundesland: Bundesland) => any) {
		let bundesland: string = this.bundesland;
		return bundesland ? this.immoCalculationService.getStates().filter(state => state.name.toLowerCase().indexOf(bundesland.toLowerCase()) === 0).map(propertyFn)[0] : 0;
	}

}
