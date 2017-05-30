import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { ProductsComponent } from './products.component';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        GridModule,
        InputsModule,
        DateInputsModule,
        DropDownsModule,
        RouterModule.forRoot([
            { path: 'products', component: ProductsComponent },
            { path: 'appcomponent', component: AppComponent }
        ])
    ],
    declarations: [
        ProductsComponent,
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
