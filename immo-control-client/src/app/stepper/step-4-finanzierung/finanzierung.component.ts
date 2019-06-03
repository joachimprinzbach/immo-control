import {Component, Input, OnInit} from '@angular/core';
import {ImmoInvestment} from '../../shared/model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'imc-finanzierung',
  templateUrl: './finanzierung.component.html',
  styleUrls: ['./finanzierung.component.scss']
})
export class FinanzierungComponent implements OnInit {
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
