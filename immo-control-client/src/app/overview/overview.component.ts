import {ChangeDetectionStrategy, Component, Input, OnInit, ViewChild} from '@angular/core';
import {ImmoInvestment} from '../shared/model';
import {Router} from '@angular/router';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
	selector: 'imc-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewComponent implements OnInit {

	displayedColumns: string[] = ['name', 'kaufpreis', 'wohnflaeche', 'monatsNettoKaltmiete', 'actions'];

	@Input()
	immoInvestments: ImmoInvestment[];

	@ViewChild(MatSort, {static: true})
	sort: MatSort;

	dataSource;

	constructor(private router: Router) {
	}

	ngOnInit(): void {
		this.dataSource = new MatTableDataSource(this.immoInvestments);
		this.dataSource.sort = this.sort;
	}

	createNew() {
		this.router.navigate(['./stepper']);
	}

	edit(id: number) {
		this.router.navigate(['./stepper', {id: id}]);
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

}
