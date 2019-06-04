import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ImmoInvestment} from '../../shared/model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'imc-hausgeld-ruecklagen',
  templateUrl: './hausgeld-ruecklagen.component.html',
  styleUrls: ['./hausgeld-ruecklagen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HausgeldRuecklagenComponent implements OnInit {

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
