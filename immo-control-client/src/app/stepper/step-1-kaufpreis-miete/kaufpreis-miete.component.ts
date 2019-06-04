import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ImmoInvestment} from '../../shared/model';
import {ImmoCalculationService} from '../../shared/immo-calculation.service';

@Component({
	selector: 'imc-kaufpreis-miete',
	templateUrl: './kaufpreis-miete.component.html',
	styleUrls: ['./kaufpreis-miete.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class KaufpreisMieteComponent implements OnInit {

	@Input()
	selectedImmoInvestment: ImmoInvestment;

	form: FormGroup;

	constructor(private formBuilder: FormBuilder, private immoCalculationService: ImmoCalculationService) {
		this.form = this.formBuilder.group({
			kaufpreis: ['', Validators.required],
			wohnflaeche: ['', Validators.required],
			monatsNettoKaltmiete: ['', Validators.required],
			bruttoMietRendite: ['']
		});
	}

	ngOnInit(): void {
		if(this.selectedImmoInvestment) {
			this.form.patchValue(this.selectedImmoInvestment);
		}
	}

	get pricePerSquareMeter() {
		let kaufpreis = this.form.get('kaufpreis').value;
		let wohnflaeche = this.form.get('wohnflaeche').value;
		return this.immoCalculationService.pricePerSquareMeter(kaufpreis, wohnflaeche);
	}

	get bruttoMietRendite() {
		let kaufpreis = this.form.get('kaufpreis').value;
		let monatsNettoKaltmiete = this.form.get('monatsNettoKaltmiete').value;
		return this.immoCalculationService.bruttoMietRendite(kaufpreis, monatsNettoKaltmiete);
	}
}
