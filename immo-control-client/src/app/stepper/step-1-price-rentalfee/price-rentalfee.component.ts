import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
	selector: 'imc-price-rentalfee',
	templateUrl: './price-rentalfee.component.html',
	styleUrls: ['./price-rentalfee.component.scss']
})
export class PriceRentalfeeComponent {

	formPriceRentalfee: FormGroup;

	constructor(private formBuilder: FormBuilder) {
		this.formPriceRentalfee = this.formBuilder.group({
			price: ['66000', Validators.required],
			size: ['55', Validators.required],
			rentalFee: ['600', Validators.required],
			bruttoMietRendite: ['']
		});
	}

	get pricePerSquareMeter() {
		let price = this.formPriceRentalfee.get('price').value;
		let size = this.formPriceRentalfee.get('size').value;
		return (price > 0 && size > 0) ? price / size : 0
	}

	get bruttoMietRendite() {
		let price = this.formPriceRentalfee.get('price').value;
		let yearlyRentalFee = this.formPriceRentalfee.get('rentalFee').value * 12;
		return (price > 0 && yearlyRentalFee > 0) ? yearlyRentalFee / price : 0
	}
}
