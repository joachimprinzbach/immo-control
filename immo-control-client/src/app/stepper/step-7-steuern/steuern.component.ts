import {Component, Input, OnInit} from '@angular/core';
import {ImmoInvestment} from '../../shared/model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'imc-steuern',
  templateUrl: './steuern.component.html',
  styleUrls: ['./steuern.component.scss']
})
export class SteuernComponent implements OnInit {

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
