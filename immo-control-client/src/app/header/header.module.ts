import { NgModule } from '@angular/core';
import {HeaderComponent} from "./header.component";
import {SharedModule} from "../shared/shared.module";

const components = [HeaderComponent];

@NgModule({
  declarations: components,
  imports: [
      SharedModule
  ],
  exports: components
})
export class HeaderModule { }
