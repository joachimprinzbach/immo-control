import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderModule} from "./header/header.module";
import {FooterModule} from "./footer/footer.module";
import {OverviewModule} from "./overview/overview.module";
import {StepperModule} from "./stepper/stepper.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HeaderModule,
        FooterModule,
        OverviewModule,
        StepperModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
