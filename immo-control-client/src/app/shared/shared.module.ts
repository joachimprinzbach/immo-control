import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {
	MatAutocompleteModule,
	MatButtonModule,
	MatChipsModule,
	MatFormFieldModule,
	MatInputModule, MatToolbarModule,
	MatTooltipModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const modules = [
	CommonModule,
	HttpClientModule,
	MatButtonModule,
	MatFormFieldModule,
	MatTooltipModule,
	MatInputModule,
	MatAutocompleteModule,
	MatToolbarModule,
	FormsModule,
	ReactiveFormsModule
];

@NgModule({
	declarations: [],
	imports: modules,
	exports: modules
})
export class SharedModule {
}
