import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OverviewPageComponent} from './overview/overview-page.component';
import {StepperPageComponent} from './stepper/stepper-page.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/overview',
		pathMatch: 'full'
	},
	{
		path: 'overview',
		component: OverviewPageComponent
	},
	{
		path: 'stepper',
		component: StepperPageComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
