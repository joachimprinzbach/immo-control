import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ImmoInvestment} from '../shared/model';

@Injectable({
	providedIn: 'root'
})
export class ImmoInvestmentService {

	constructor(private httpClient: HttpClient) {
	}

	getImmoInvestments(): Observable<ImmoInvestment[]> {
		return of([
			{
				name: 'Test'
			},
			{
				name: 'Other one'
			}
		])
	}
}
