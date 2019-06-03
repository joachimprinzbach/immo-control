import {Component, Input, OnInit} from '@angular/core';
import {ImmoInvestment} from '../../shared/model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'imc-zinsen',
  templateUrl: './zinsen.component.html',
  styleUrls: ['./zinsen.component.scss']
})
export class ZinsenComponent implements OnInit {

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
