import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OverviewPageComponent} from './overview/overview-page.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/overview',
		pathMatch: 'full'
	},
	{
		path: 'overview',
		component: OverviewPageComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
