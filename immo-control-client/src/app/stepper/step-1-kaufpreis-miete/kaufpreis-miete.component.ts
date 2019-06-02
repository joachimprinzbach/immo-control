import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ImmoInvestment} from '../../shared/model';

@Component({
	selector: 'imc-kaufpreis-miete',
	templateUrl: './kaufpreis-miete.component.html',
	styleUrls: ['./kaufpreis-miete.component.scss']
})
export class KaufpreisMieteComponent implements OnInit {

	@Input()
	selectedImmoInvestment: ImmoInvestment;

	formPriceRentalfee: FormGroup;

	constructor(private formBuilder: FormBuilder) {
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
		let price = this.formPriceRentalfee.get('kaufpreis').value;
		let size = this.formPriceRentalfee.get('wohnflaeche').value;
		return (price > 0 && size > 0) ? price / size : 0
	}

	get bruttoMietRendite() {
		let price = this.formPriceRentalfee.get('kaufpreis').value;
		let yearlyRentalFee = this.formPriceRentalfee.get('monatsNettoKaltmiete').value * 12;
		return (price > 0 && yearlyRentalFee > 0) ? yearlyRentalFee / price : 0
	}
}
