import { NgModule } from '@angular/core';
import {OverviewComponent} from "./overview.component";
import {SharedModule} from "../shared/shared.module";

const components = [OverviewComponent];

@NgModule({
  declarations: components,
  imports: [
      SharedModule
  ],
  exports: components
})
export class OverviewModule { }
