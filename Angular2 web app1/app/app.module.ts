import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { AppComponent }  from './app.component';

@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule, GridModule, InputsModule, DateInputsModule, DropDownsModule],
  declarations: [ AppComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
