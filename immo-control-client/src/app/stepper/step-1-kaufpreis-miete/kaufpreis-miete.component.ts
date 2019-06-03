import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ImmoInvestment} from '../../shared/model';
import {ImmoCalculationService} from '../../shared/immo-calculation.service';

@Component({
	selector: 'imc-kaufpreis-miete',
	templateUrl: './kaufpreis-miete.component.html',
	styleUrls: ['./kaufpreis-miete.component.scss']
})
export class KaufpreisMieteComponent implements OnInit {

	@Input()
	selectedImmoInvestment: ImmoInvestment;

	formPriceRentalfee: FormGroup;

	constructor(private formBuilder: FormBuilder, private immoCalculationService: ImmoCalculationService) {
		this.formPriceRentalfee = this.formBuilder.group({
			kaufpreis: ['', Validators.required],
			wohnflaeche: ['', Validators.required],
			monatsNettoKaltmiete: ['', Validators.required],
			bruttoMietRendite: ['']
		});
	}

	ngOnInit(): void {
		if(this.selectedImmoInvestment) {
			this.formPriceRentalfee.patchValue(this.selectedImmoInvestment);
		}
	}

	get pricePerSquareMeter() {
		let kaufpreis = this.formPriceRentalfee.get('kaufpreis').value;
		let wohnflaeche = this.formPriceRentalfee.get('wohnflaeche').value;
		return this.immoCalculationService.pricePerSquareMeter(kaufpreis, wohnflaeche);
	}

	get bruttoMietRendite() {
		let kaufpreis = this.formPriceRentalfee.get('kaufpreis').value;
		let monatsNettoKaltmiete = this.formPriceRentalfee.get('monatsNettoKaltmiete').value;
		return this.immoCalculationService.bruttoMietRendite(kaufpreis, monatsNettoKaltmiete);
	}
}
