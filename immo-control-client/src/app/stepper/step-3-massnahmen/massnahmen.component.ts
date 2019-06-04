import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ImmoInvestment} from '../../shared/model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
	selector: 'imc-massnahmen',
	templateUrl: './massnahmen.component.html',
	styleUrls: ['./massnahmen.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MassnahmenComponent implements OnInit {

	@Input()
	selectedImmoInvestment: ImmoInvestment;

	form: FormGroup;

	constructor(private formBuilder: FormBuilder) {
		this.form = this.formBuilder.group({
			bundesland: ['', Validators.required]
		});
	}

	ngOnInit(): void {
		if (this.selectedImmoInvestment) {
			this.form.patchValue(this.selectedImmoInvestment);
		}
	}

}
