import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {
	MatAutocompleteModule,
	MatButtonModule,
	MatChipsModule,
	MatFormFieldModule,
	MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule, MatToolbarModule,
	MatTooltipModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';

const modules = [
	CommonModule,
	HttpClientModule,
	MatButtonModule,
	MatFormFieldModule,
	MatTooltipModule,
	MatInputModule,
	MatAutocompleteModule,
	MatToolbarModule,
	MatTableModule,
	MatPaginatorModule,
	MatSortModule,
	FormsModule,
	AppRoutingModule,
	ReactiveFormsModule
];

@NgModule({
	declarations: [],
	imports: modules,
	exports: modules
})
export class SharedModule {
}
