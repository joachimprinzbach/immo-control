import {NgModule} from '@angular/core';
import {FooterComponent} from "./footer.component";
import {SharedModule} from "../shared/shared.module";

const components = [FooterComponent];

@NgModule({
	declarations: components,
	imports: [
		SharedModule
	],
	exports: components
})
export class FooterModule {
}
