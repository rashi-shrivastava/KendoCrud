import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KindoFormComponent } from './kindo-form/kindo-form.component';
import { KindoDialogComponent } from './kindo-dialog/kindo-dialog.component';
import { KindoGridComponent } from './kindo-grid/kindo-grid.component';
import { KindoTempDrivenComponent } from './kindo-temp-driven/kindo-temp-driven.component';
import { GridModule} from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import {
  InputsModule,
  NumericTextBoxModule
} from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { process, orderBy, filterBy} from '@progress/kendo-data-query';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
// import { DialogService } from '@progress/kendo-angular-dialog';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditorModule } from '@progress/kendo-angular-editor';
import {SharedModule} from './shared.module';
import { KGridComponent } from './k-grid/k-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    KindoFormComponent,
    KindoDialogComponent,
    KindoGridComponent,
    KindoTempDrivenComponent,
    KGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    // DialogService,
    ButtonsModule,
    DateInputsModule,
    GridModule,
    InputsModule,
    DropDownsModule,
    NumericTextBoxModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    EditorModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
