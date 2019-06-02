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
				id: 99,
				name: 'Test',
				kaufpreis: 240000,
				wohnflaeche: 86,
				monatsNettoKaltmiete: 980,
				bundesland: 'Baden-Wuerttemberg',
				grundErwerbssteuerSatz: 0.005,
				maklerProvisionKaeuferSatz: 0.0357,
			},
			{
				id: 85,
				name: 'Other one',
				kaufpreis: 165000,
				wohnflaeche: 66,
				monatsNettoKaltmiete: 700,
				bundesland: 'Baden-Wuerttemberg',
				grundErwerbssteuerSatz: 0.005,
				maklerProvisionKaeuferSatz: 0.0357,
			}
		])
	}
}
