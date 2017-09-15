import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, BrowserAnimationsModule, FlexLayoutModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
